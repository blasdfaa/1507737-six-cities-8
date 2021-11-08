import { createReducer } from '@reduxjs/toolkit';

import { FavoriteHotelsDataState } from '../../types/state';
import { updateHotelAction } from '../all-hotels-data/all-hotels-actions';
import { fetchFavoriteHotelsAction, setFavoriteHotelsAction } from './favorite-hotels-actions';

const initialState: FavoriteHotelsDataState = {
  hotels: [],
  isDataLoadded: false,
};

export const favoriteHotelsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFavoriteHotelsAction, (state) => {
      state.hotels = [];
      state.isDataLoadded = false;
    })
    .addCase(setFavoriteHotelsAction, (state, action) => {
      const hotels = action.payload;

      state.hotels = hotels;
      state.isDataLoadded = true;
    })
    .addCase(updateHotelAction, (state, action) => {
      const newHotel = action.payload;
      const index = state.hotels.findIndex((offer) => offer.id === newHotel.id);

      if (index !== -1) {
        state.hotels[index] = newHotel;
      }
    })
    .addDefaultCase((state) => state);
});
