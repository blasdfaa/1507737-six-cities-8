import { createReducer } from '@reduxjs/toolkit';

import { HotelPageDataState } from '../../types/state';
import {
  fetchHotelDataAction,
  fetchHotelDataErrorAction,
  setHotelPageDataAction,
} from './hotel-page-actions';
import {
  fetchNearbyHotelsAction,
  fetchNearbyHotelsErrorAction,
  setNearbyHotelsAction,
} from './nearby-hotels-actions';
import {
  fetchReviewsDataAction,
  fetchReviewsErrorAction,
  setReviewsDataAction,
  updateReviewsAction,
} from './reviews-actions';

const initialState: HotelPageDataState = {
  hotel: null,
  isDataLoadded: true,
  reviews: [],
  nearbyHotels: [],
  errorMessage: null,
};

export const hotelPageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchHotelDataAction, (state) => {
      state.hotel = null;
      state.isDataLoadded = false;
      state.errorMessage = null;
      state.reviews = [];
      state.nearbyHotels = [];
    })
    .addCase(setHotelPageDataAction, (state, action) => {
      const hotel = action.payload;

      state.hotel = hotel;
      state.isDataLoadded = true;
      state.errorMessage = null;
    })
    .addCase(fetchHotelDataErrorAction, (state, action) => {
      const errorMessage = action.payload;

      state.hotel = null;
      state.isDataLoadded = true;
      state.errorMessage = errorMessage;
      state.reviews = [];
      state.nearbyHotels = [];
    })
    .addCase(fetchReviewsDataAction, (state) => {
      state.reviews = [];
    })
    .addCase(setReviewsDataAction, (state, action) => {
      const reviews = action.payload;

      state.reviews = reviews;
    })
    .addCase(fetchReviewsErrorAction, (state) => {
      state.reviews = [];
    })
    .addCase(updateReviewsAction, (state, action) => {
      const newReview = action.payload;

      state.reviews.push(newReview);
    })
    .addCase(fetchNearbyHotelsAction, (state) => {
      state.nearbyHotels = [];
    })
    .addCase(setNearbyHotelsAction, (state, action) => {
      const nearbyHotels = action.payload;

      state.nearbyHotels = nearbyHotels;
    })
    .addCase(fetchNearbyHotelsErrorAction, (state) => {
      state.nearbyHotels = [];
    });
});
