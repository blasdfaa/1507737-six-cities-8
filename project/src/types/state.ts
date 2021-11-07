import { AuthorizationStatus, reviewPostStatus } from '../const';
import { rootReducer } from '../redux/root-reducer';
import { HotelCategory, HotelInfo, HotelSortOption } from './hotel';
import { HotelReview } from './review';
import { UserData } from './user';

export type RootState = ReturnType<typeof rootReducer>;

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type AllHotelsDataState = {
  hotels: HotelInfo[] | [];
  isDataLoadded: boolean;
  sortBy: HotelSortOption;
  selectedCategory: HotelCategory;
};

export type FavoriteHotelsDataState = {
  hotels: HotelInfo[] | [];
  isDataLoadded: boolean;
};

export type HotelPageDataState = {
  hotel: HotelInfo | null;
  isDataLoadded: boolean;
  reviewSendingStatus: reviewPostStatus;
  reviews: HotelReview[] | [];
  nearbyHotels: HotelInfo[] | [];
};
