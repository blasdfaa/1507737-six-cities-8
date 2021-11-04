import { createAction } from '@reduxjs/toolkit';

import { ActionType, ErrorMessages } from '../../const';
import { HotelCategory, HotelInfo, HotelSortOption } from '../../types/hotel';

export const fetchAllHotelsAction = createAction(ActionType.FetchAllHotels);

export const setAllHotelsAction = createAction(ActionType.SetAllHotels,
  (hotels: HotelInfo[]) => (
    {
      payload: hotels,
    }
  ),
);

export const fetchAllHotelsErrorAction = createAction(
  ActionType.FetchAllHotelsError,
  (message: ErrorMessages) => (
    {
      payload: message,
    }
  ),
);

export const setSortOptionHotelsAction = createAction(
  ActionType.SetSortOptionHotels,
  (option: HotelSortOption) => (
    {
      payload: option,
    }
  ),
);

export const setHotelsCategoryAction = createAction(
  ActionType.SetHotelsCategory,
  (category: HotelCategory) => (
    {
      payload: category,
    }
  ),
);

export const updateHotelAction = createAction(ActionType.UpdateHotel,
  (hotel: HotelInfo) => (
    {
      payload: hotel,
    }
  ),
);
