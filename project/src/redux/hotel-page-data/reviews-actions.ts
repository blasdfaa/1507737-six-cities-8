import { createAction } from '@reduxjs/toolkit';

import { ActionType, reviewPostStatus } from '../../const';
import { HotelReview } from '../../types/review';

export const fetchReviewsDataAction = createAction(ActionType.FetchHotelReviews);
export const fetchReviewsDataErrorAction = createAction(ActionType.FetchHotelReviewsError);

export const setReviewsDataAction = createAction(ActionType.SetHotelReviews, (reviews: HotelReview[]) => ({
  payload: reviews,
}));

export const setLoadingStatusPostReviewAction = createAction(
  ActionType.SetLoadingStatusPostReview,
  (status: reviewPostStatus) => ({
    payload: status,
  }),
);
