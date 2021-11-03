import { HotelInfo } from '../../types/hotel';
import { HotelReview } from '../../types/review';
import { RootState } from '../../types/state';

export const getHotelPageData = (state: RootState): HotelInfo | null => state.HOTEL_PAGE_DATA.hotel;
export const getNearbyHotelsData = (state: RootState): HotelInfo[] | [] => state.HOTEL_PAGE_DATA.nearbyHotels;
export const getHotelReviewsData = (state: RootState): HotelReview[] | [] => state.HOTEL_PAGE_DATA.reviews;

export const getHotelPageMapPoints = (state: RootState): HotelInfo[] | [] => {
  if (state.HOTEL_PAGE_DATA.hotel) {
    return [...state.HOTEL_PAGE_DATA.nearbyHotels, state.HOTEL_PAGE_DATA.hotel];
  }

  return state.HOTEL_PAGE_DATA.nearbyHotels;
};
