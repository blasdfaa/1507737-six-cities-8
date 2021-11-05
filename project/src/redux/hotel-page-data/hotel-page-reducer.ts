import { createReducer } from '@reduxjs/toolkit';
import { reviewPostStatus } from '../../const';

import { HotelPageDataState } from '../../types/state';
import { updateHotelAction } from '../all-hotels-data/all-hotels-actions';
import {
  fetchHotelDataAction,
  fetchHotelDataErrorAction,
  setHotelPageDataAction,
  updateHotelPageData,
  updateHotelPageDataError
} from './hotel-page-actions';
import {
  fetchNearbyHotelsAction,
  fetchNearbyHotelsErrorAction,
  setNearbyHotelsAction
} from './nearby-hotels-actions';
import {
  fetchReviewsDataAction,
  fetchReviewsErrorAction,
  setReviewsDataAction,
  addNewReviewErrorAction,
  setLoadingStatusPostReviewAction
} from './reviews-actions';

const initialState: HotelPageDataState = {
  hotel: null,
  isDataLoadded: true,
  reviews: [],
  reviewSendingStatus: reviewPostStatus.Default,
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
    .addCase(updateHotelPageData, (state, action) => {
      const updatedHotel = action.payload;

      state.hotel = updatedHotel;
    })
    .addCase(updateHotelPageDataError, (state, action) => {
      const errorMessage = action.payload;

      state.errorMessage = errorMessage;
    })
    .addCase(fetchReviewsDataAction, (state) => {
      state.reviews = [];
    })
    .addCase(setLoadingStatusPostReviewAction, (state, action) => {
      const loadingStatus = action.payload;

      state.reviewSendingStatus = loadingStatus;
    })
    .addCase(setReviewsDataAction, (state, action) => {
      const reviews = action.payload;
      const loadingStatus = reviewPostStatus.Default;

      state.reviews = reviews;
      state.reviewSendingStatus = loadingStatus;
    })
    .addCase(addNewReviewErrorAction, (state, action) => {
      const errorMessage = action.payload;

      state.errorMessage = errorMessage;
    })
    .addCase(fetchReviewsErrorAction, (state) => {
      state.reviews = [];
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
    })
    .addCase(updateHotelAction, (state, action) => {
      const newHotel = action.payload;
      const index = state.nearbyHotels.findIndex((offer) => offer.id === newHotel.id);

      if (index !== -1) {
        state.nearbyHotels[index] = newHotel;
      }
    })
    .addDefaultCase((state) => state);
});
