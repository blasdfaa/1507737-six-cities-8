import { combineReducers } from 'redux';

import { userProcessReducer } from './user-process-data/user-precess-reducer';
import { allHotelsReducer } from './all-hotels-data/all-hotels-reducer';
import { favoriteHotelsReducer } from './favorite-hotels-data/favorite-hotels-reducer';
import { hotelPageReducer } from './hotel-page-data/hotel-page-reducer';

export const rootReducer = combineReducers({
  USER_PROCESS: userProcessReducer,
  ALL_HOTELS_DATA: allHotelsReducer,
  FAVORITE_HOTELS_DATA: favoriteHotelsReducer,
  HOTEL_PAGE_DATA: hotelPageReducer,
});
