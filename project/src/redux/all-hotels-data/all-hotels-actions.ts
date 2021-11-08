import { createAction } from '@reduxjs/toolkit';

import { ActionType } from '../../const';
import { HotelCategory, HotelInfo, HotelSortOption } from '../../types/hotel';

export const fetchAllHotelsAction = createAction(ActionType.FetchAllHotels);

export const setAllHotelsAction = createAction(ActionType.SetAllHotels, (hotels: HotelInfo[]) => ({
  payload: hotels,
}));

export const setSortOptionHotelsAction = createAction(
  ActionType.SetSortOptionHotels,
  (option: HotelSortOption) => ({
    payload: option,
  }),
);

export const setHotelsCategoryAction = createAction(
  ActionType.SetHotelsCategory,
  (category: HotelCategory) => ({
    payload: category,
  }),
);

export const updateHotelAction = createAction(ActionType.UpdateHotel, (hotel: HotelInfo) => ({
  payload: hotel,
}));
