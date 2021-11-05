import { createReducer } from '@reduxjs/toolkit';

import { AllHotelsDataState } from '../../types/state';
import {
  fetchAllHotelsAction,
  fetchAllHotelsErrorAction,
  setAllHotelsAction,
  setHotelsCategoryAction,
  setSortOptionHotelsAction,
  updateHotelAction
} from './all-hotels-actions';

const initialState: AllHotelsDataState = {
  hotels: [],
  isDataLoadded: false,
  errorMessage: null,
  sortBy: 'Popular',
  selectedCategory: 'Paris',
};

export const allHotelsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAllHotelsAction, (state) => {
      state.hotels = [];
      state.isDataLoadded = false;
      state.errorMessage = null;
    })
    .addCase(setAllHotelsAction, (state, action) => {
      const offers = action.payload;

      state.hotels = offers;
      state.isDataLoadded = true;
      state.errorMessage = null;
    })
    .addCase(fetchAllHotelsErrorAction, (state, action) => {
      const errorMessage = action.payload;

      state.hotels = [];
      state.isDataLoadded = true;
      state.errorMessage = errorMessage;
    })
    .addCase(setSortOptionHotelsAction, (state, action) => {
      const sortOption = action.payload;

      state.sortBy = sortOption;
    })
    .addCase(setHotelsCategoryAction, (state, action) => {
      const category = action.payload;

      state.selectedCategory = category;
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
