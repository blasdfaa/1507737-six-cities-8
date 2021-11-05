import { createAction } from '@reduxjs/toolkit';

import { ActionType, ErrorMessages, reviewPostStatus } from '../../const';
import { HotelReview } from '../../types/review';

export const fetchReviewsDataAction = createAction(ActionType.FetchHotelReviews);

export const setReviewsDataAction = createAction(ActionType.SetHotelReviews, (reviews: HotelReview[]) => ({
  payload: reviews,
}));

export const setLoadingStatusPostReviewAction = createAction(
  ActionType.SetLoadingStatusPostReview,
  (status: reviewPostStatus) => ({
    payload: status,
  }),
);

export const fetchReviewsErrorAction = createAction(
  ActionType.FetchHotelReviewsError,
  (message: ErrorMessages) => ({
    payload: message,
  }),
);

export const addNewReviewErrorAction = createAction(
  ActionType.AddNewHotelReviewError,
  (message: ErrorMessages) => ({
    payload: message,
  }),
);
