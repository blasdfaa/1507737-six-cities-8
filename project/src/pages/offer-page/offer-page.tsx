import { useParams } from 'react-router-dom';

import { NEAR_OFFERS_COUNT } from '../../const';
import { getRatingValue } from '../../utils/get-rating-value';
import { ReviewItems } from '../../mocks/reviews';
import { OfferItems } from '../../mocks/offers';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';

const nearPoints = OfferItems.slice(0, NEAR_OFFERS_COUNT);

type UseParamsType = {
  id: string;
};

function OfferPage(): JSX.Element {
  const params = useParams<UseParamsType>();
  const items = OfferItems[+params.id - 1];
  const {
    id,
    city,
    bedrooms,
    description,
    goods = [],
    host,
    images = [],
    isFavorite,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type,
  } = items;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images &&
              images.map((src, index) => {
                const key = `${src}_${index}`;
                return (
                  <div className="property__image-wrapper" key={key}>
                    <img className="property__image" src={src} alt="Photos studio" />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">{title}</h1>
              <button
                className={`property__bookmark-button button ${
                  isFavorite ? 'property__bookmark-button--active' : ''
                }`}
                type="button"
              >
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${getRatingValue(rating)}%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">{type}</li>
              <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
              <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods &&
                  goods.map((good, index) => {
                    const key = `${good}_${index}`;
                    return (
                      <li className="property__inside-item" key={key}>
                        {good}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar"
                    src={host.avatarUrl}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">{host.name}</span>
                {host.isPro && <span className="property__user-status">Pro</span>}
              </div>
              <div className="property__description">
                <p className="property__text">{description}</p>
              </div>
            </div>
            <ReviewList items={ReviewItems} />
          </div>
        </div>
        <Map className="property__map" city={city} points={nearPoints} selectedPointId={id} />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OfferList
              listClassName="near-places__list places__list"
              items={OfferItems.slice(0, NEAR_OFFERS_COUNT)}
              type="near"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferPage;
