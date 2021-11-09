import { createSelector } from 'reselect';

import { reviewPostStatus } from '../../const';
import { HotelInfo } from '../../types/hotel';
import { HotelReview } from '../../types/review';
import { sortDateFromNewToOld } from '../../utils/date';
import { RootState } from '../store';

const MAX_DISPLAYED_REVIEWS = 10;

export const getHotelPageData = (state: RootState): HotelInfo | null => state.HOTEL_PAGE_DATA.hotel;

export const getNearbyHotelsData = (state: RootState): HotelInfo[] | [] => state.HOTEL_PAGE_DATA.nearbyHotels;

const getHotelReviewsData = (state: RootState): HotelReview[] | [] => state.HOTEL_PAGE_DATA.reviews;

export const getPostReviewLoadingStatus = (state: RootState): reviewPostStatus =>
  state.HOTEL_PAGE_DATA.reviewSendingStatus;

export const getHotelPageLoadingStatus = (state: RootState): boolean => state.HOTEL_PAGE_DATA.isDataLoadded;

export const hotelPageMapPointsSelector = createSelector(
  getHotelPageData,
  getNearbyHotelsData,
  (hotelPageData, nearbyHotels) => {
    if (hotelPageData) {
      return [...nearbyHotels, hotelPageData];
    }

    return nearbyHotels;
  },
);

export const hotelReviewsDataSelector = createSelector(getHotelReviewsData, (reviews) =>
  [...reviews].sort(sortDateFromNewToOld).slice(0, MAX_DISPLAYED_REVIEWS),
);
