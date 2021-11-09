import React from 'react';

import { HotelCategory, HotelInfo } from '../../types/hotel';
import Tabs from '../../components/tabs/tabs';
import Map from '../../components/map/map';
import HomeEmpty from '../../components/home-empty/home-empty';
import HotelList from '../../components/hotel-list/hotel-list';
import SortPopup from '../../components/sort-popup/sort-popup';
import {
  setHotelsCategoryAction,
  setSortOptionHotelsAction
} from '../../redux/all-hotels-data/all-hotels-actions';
import Preloader from '../../components/preloader/preloader';
import {
  getAllHotelItems,
  getAllHotelsCategory,
  getAllHotelsLoadingStatus,
  getAllHotelsSortType,
  sortedItemsSelector
} from '../../redux/all-hotels-data/selectors';
import { HotelSortOptions } from '../../const';
import Header from '../../components/header/header';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';

const DEFAULT_SELECTED_SORT_OPTION = HotelSortOptions[0];

function HomePage(): JSX.Element {
  const [selectedCard, setSelectedCard] = React.useState<HotelInfo | null>(null);
  const [cards, setCards] = React.useState<HotelInfo[] | []>([]);
  const [isLoaderShow, setLoaderShow] = React.useState(true);

  const dispatch = useAppDispatch();

  const hotelItems = useAppSelector(getAllHotelItems);
  const isDataLoadded = useAppSelector(getAllHotelsLoadingStatus);
  const sortType = useAppSelector(getAllHotelsSortType);
  const currentCategory = useAppSelector(getAllHotelsCategory);
  const sortedItems = useAppSelector(sortedItemsSelector);

  const isDataEmpty = !hotelItems.length;
  const defaultCityMap = cards[0]?.city;

  React.useEffect(() => {
    dispatch(setSortOptionHotelsAction(DEFAULT_SELECTED_SORT_OPTION));
  }, []);

  React.useEffect(() => {
    setCards(sortedItems);
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
