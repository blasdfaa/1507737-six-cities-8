import { createReducer } from '@reduxjs/toolkit';

import { FavoriteHotelsDataState } from '../../types/state';
import { updateHotelAction } from '../all-hotels-data/all-hotels-actions';
import {
  fetchFavoriteHotelsAction,
  fetchFavoriteHotelsErrorAction,
  setFavoriteHotelsAction
} from './favorite-hotels-actions';

const initialState: FavoriteHotelsDataState = {
  hotels: [],
  isDataLoadded: false,
  errorMessage: null,
};

export const favoriteHotelsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFavoriteHotelsAction, (state) => {
      state.hotels = [];
      state.isDataLoadded = false;
      state.errorMessage = null;
    })
    .addCase(setFavoriteHotelsAction, (state, action) => {
      const hotels = action.payload;

      state.hotels = hotels;
      state.isDataLoadded = true;
      state.errorMessage = null;
    })
    .addCase(fetchFavoriteHotelsErrorAction, (state, action) => {
      const errorMessage = action.payload;

      state.hotels = [];
      state.isDataLoadded = false;
      state.errorMessage = errorMessage;
    })
    .addCase(updateHotelAction, (state, action) => {
      const newHotel = action.payload;
      const index = state.hotels.findIndex((offer) => offer.id === newHotel.id);

      if (index !== -1) {
        state.hotels[index] = newHotel;
      }
    });
});
