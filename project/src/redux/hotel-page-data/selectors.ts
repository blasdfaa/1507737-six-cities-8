import { HotelInfo } from '../../types/hotel';
import { RootState } from '../../types/state';

export const getHotelPageInfo = (state: RootState): HotelInfo | null => state.HOTEL_PAGE_DATA.hotel;
