import { HotelCategory, HotelInfo, HotelSortOption } from '../../types/hotel';
import { RootState } from '../../types/state';

export const getAllHotelItems = (state: RootState): HotelInfo[] => state.ALL_HOTELS_DATA.hotels;
export const getAllHotelsLoadingStatus = (state: RootState): boolean => state.ALL_HOTELS_DATA.isDataLoadded;
export const getAllHotelsSortType = (state: RootState): HotelSortOption => state.ALL_HOTELS_DATA.sortBy;
export const getAllHotelsCategory = (state: RootState): HotelCategory =>
  state.ALL_HOTELS_DATA.selectedCategory;
