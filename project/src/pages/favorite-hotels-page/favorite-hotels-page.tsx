/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FavoriteEmpty from '../../components/favorite-empty/favorite-empty';
import FavoriteListItem from '../../components/favorite-list-item/favorite-list-item';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { HotelCategories } from '../../const';
import { loadFavoriteOffersAction } from '../../redux/favorite-hotels-data/api-actions';
import {
  getFavoriteHotelItems,
  getFavoriteHotelLoaddedStatus
} from '../../redux/favorite-hotels-data/selectors';

function FavoriteHotelsPage(): JSX.Element {
  const dispatch = useDispatch();

  const hotelItems = useSelector(getFavoriteHotelItems);
  const isDataLoadded = useSelector(getFavoriteHotelLoaddedStatus);

  const favoriteHotelItems = hotelItems.filter((hotel) => hotel.isFavorite);

  React.useEffect(() => {
    dispatch(loadFavoriteOffersAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {!favoriteHotelItems.length && isDataLoadded ? (
            <FavoriteEmpty />
          ) : (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {HotelCategories.map((category) => (
                  <FavoriteListItem category={category} favoriteItems={favoriteHotelItems} key={category} />
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoriteHotelsPage;
