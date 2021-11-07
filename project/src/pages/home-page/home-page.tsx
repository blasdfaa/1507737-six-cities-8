import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HotelCategory, HotelInfo } from '../../types/hotel';
import Tabs from '../../components/tabs/tabs';
import Map from '../../components/map/map';
import HomeEmpty from '../../components/home-empty/home-empty';
import HotelList from '../../components/hotel-list/hotel-list';
import SortPopup from '../../components/sort-popup/sort-popup';
import { sortCardsByType } from '../../utils/sort-cards-by-type';
import {
  setHotelsCategoryAction,
  setSortOptionHotelsAction
} from '../../redux/all-hotels-data/all-hotels-actions';
import Preloader from '../../components/preloader/preloader';
import {
  getAllHotelItems,
  getAllHotelsCategory,
  getAllHotelsLoadingStatus,
  getAllHotelsSortType
} from '../../redux/all-hotels-data/selectors';
import { HotelCategories, HotelSortOptions } from '../../const';
import Header from '../../components/header/header';

const DEFAULT_SELECTED_SORT_OPTION = HotelSortOptions[0];
const DEFAULT_SELECTED_CATEGORY = HotelCategories[0];

function HomePage(): JSX.Element {
  const dispatch = useDispatch();

  const hotelItems = useSelector(getAllHotelItems);
  const isDataLoadded = useSelector(getAllHotelsLoadingStatus);
  const sortType = useSelector(getAllHotelsSortType);
  const currentCategory = useSelector(getAllHotelsCategory);

  const [selectedCard, setSelectedCard] = React.useState<HotelInfo | null>(null);
  const [cards, setCards] = React.useState<HotelInfo[] | []>([]);
  const [isLoaderShow, setLoaderShow] = React.useState(true);

  const filteredItems = hotelItems?.filter((hotel) => hotel?.city?.name === currentCategory);

  const isDataEmpty = !hotelItems.length;
  const defaultCityMap = cards[0]?.city;

  React.useEffect(() => {
    dispatch(setSortOptionHotelsAction(DEFAULT_SELECTED_SORT_OPTION));
    dispatch(setHotelsCategoryAction(DEFAULT_SELECTED_CATEGORY));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const sortedItems = sortCardsByType(sortType, filteredItems);

    setCards(sortedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, hotelItems, currentCategory]);

  const handleChangeCategory = (e: React.SyntheticEvent, category: HotelCategory) => {
    e.preventDefault();

    dispatch(setHotelsCategoryAction(category));
  };

  const handleSelectCard = (hotel: HotelInfo): void => {
    setSelectedCard(hotel);
  };

  const handleShowPreloader = () => {
    setLoaderShow(false);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${isDataEmpty ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs currentCategory={currentCategory} onTabClick={handleChangeCategory} />
        <div className="cities">
          {isLoaderShow && <Preloader onAnimationEnd={handleShowPreloader} />}
          {isDataLoadded && !isLoaderShow && (
            <div
              className={`cities__places-container container ${
                isDataEmpty ? 'cities__places-container--empty' : ''
              }`}
            >
              {!isDataEmpty ? (
                <>
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">
                      {cards && cards.length} places to stay in {currentCategory}
                    </b>
                    <SortPopup />
                    <HotelList
                      items={cards}
                      type="cities"
                      handleSelectCard={handleSelectCard}
                      listClassName="cities__places-list places__list tabs__content"
                    />
                  </section>
                  <div className="cities__right-section">
                    {cards.length && (
                      <Map
                        className="cities__map"
                        city={defaultCityMap}
                        points={cards}
                        selectedPointId={selectedCard && selectedCard.id}
                      />
                    )}
                  </div>
                </>
              ) : (
                <HomeEmpty />
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
