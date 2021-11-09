import React from 'react';
import { useParams } from 'react-router-dom';

import { getRatingValue } from '../../utils/get-rating-value';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import HotelList from '../../components/hotel-list/hotel-list';
import { HotelInfo } from '../../types/hotel';
import {
  getHotelPageData,
  getHotelPageLoadingStatus,
  getNearbyHotelsData,
  hotelPageMapPointsSelector,
  hotelReviewsDataSelector
} from '../../redux/hotel-page-data/selectors';
import {
  changeHotelFavoriteStatus,
  loadHotelDataAction,
  loadNearbyHotelsDataAction,
  loadReviewsDataAction
} from '../../redux/hotel-page-data/api-actions';
import Header from '../../components/header/header';
import { getHotelTypeName } from '../../utils/get-hotel-type-name';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import ErrorPage from '../error-page/error-page';
import { ERROR_404_MESSAGE } from '../../const';

const SHOWN_PHOTOS_COUNT = 6;

type UseParams = {
  id: string;
};

function HotelPage(): JSX.Element {
  const { id: hotelId } = useParams<UseParams>();
  const dispatch = useAppDispatch();

  const hotelData = useAppSelector(getHotelPageData);
  const isHotelDataLoaded = useAppSelector(getHotelPageLoadingStatus);
  const nearbyHotelsData = useAppSelector(getNearbyHotelsData);
  const hotelReviewsData = useAppSelector(hotelReviewsDataSelector);
  const hotelPageMapPoints = useAppSelector(hotelPageMapPointsSelector);

  const [hotelInfo, setHotelInfo] = React.useState<HotelInfo | null>(null);

  React.useEffect(() => {
    dispatch(loadHotelDataAction(Number(hotelId)));
    dispatch(loadReviewsDataAction(Number(hotelId)));
    dispatch(loadNearbyHotelsDataAction(Number(hotelId)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotelId]);

  React.useEffect(() => {
    setHotelInfo(hotelData);
  }, [hotelData]);

  const handleChangeFavoriteStatus = (): void => {
    if (hotelData !== null) {
      dispatch(changeHotelFavoriteStatus(hotelData));
    }
  };

  if (isHotelDataLoaded && !hotelData) {
    return <ErrorPage code="404" text={ERROR_404_MESSAGE} />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {hotelInfo?.images &&
                hotelInfo.images.slice(0, SHOWN_PHOTOS_COUNT).map((src) => (
                  <div className="property__image-wrapper" key={`${src}_key`}>
                    <img className="property__image" src={src} alt="Photos studio" />
                  </div>
                ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {hotelInfo?.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{hotelInfo?.title}</h1>
                <button
                  className={`property__bookmark-button button ${
                    hotelInfo?.isFavorite ? 'property__bookmark-button--active' : ''
                  }`}
                  type="button"
                  onClick={handleChangeFavoriteStatus}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${getRatingValue(Number(hotelInfo?.rating))}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{hotelInfo?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {getHotelTypeName(hotelInfo?.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {hotelInfo?.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {hotelInfo?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{hotelInfo?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {hotelInfo?.goods &&
                    hotelInfo.goods.map((good) => (
                      <li className="property__inside-item" key={`${good}_good`}>
                        {good}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={hotelInfo?.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{hotelInfo?.host.name}</span>
                  {hotelInfo?.host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">{hotelInfo?.description}</p>
                </div>
              </div>
              <ReviewList items={hotelReviewsData} />
            </div>
          </div>
          <Map
            className="property__map"
            city={hotelInfo && hotelInfo.city}
            points={hotelPageMapPoints && hotelPageMapPoints}
            selectedPointId={hotelInfo && hotelInfo.id}
            scrolling
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <HotelList
                listClassName="near-places__list places__list"
                items={nearbyHotelsData}
                type="near"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default HotelPage;
