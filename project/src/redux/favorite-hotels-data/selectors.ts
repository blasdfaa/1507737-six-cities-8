import { HotelInfo } from '../../types/hotel';
import { RootState } from '../../types/state';

export const getFavoriteHotelItems = (state: RootState): HotelInfo[] => state.FAVORITE_HOTELS_DATA.hotels;
export const getFavoriteHotelLoaddedStatus = (state: RootState): boolean =>
  state.FAVORITE_HOTELS_DATA.isDataLoadded;
