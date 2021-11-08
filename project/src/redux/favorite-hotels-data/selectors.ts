import { createSelector } from 'reselect';

import { HotelInfo } from '../../types/hotel';
import { RootState } from '../store';

const getFavoriteHotels = (state: RootState): HotelInfo[] => state.FAVORITE_HOTELS_DATA.hotels;

export const getFavoriteHotelLoaddedStatus = (state: RootState): boolean =>
  state.FAVORITE_HOTELS_DATA.isDataLoadded;

export const favoriteHotelsSelector = createSelector(getFavoriteHotels, (hotels) =>
  hotels.filter((hotel) => hotel.isFavorite),
);
