import { createAction } from '@reduxjs/toolkit';

import { ActionType } from '../../const';
import { HotelInfo } from '../../types/hotel';

export const fetchHotelDataAction = createAction(ActionType.FetchHotelData);

export const setHotelPageDataAction = createAction(ActionType.SetHotelPageData, (hotel: HotelInfo) => ({
  payload: hotel,
}));

export const updateHotelPageData = createAction(ActionType.UpdateHotelPageData, (hotel: HotelInfo) => ({
  payload: hotel,
}));

export const fetchHotelDataErrorAction = createAction(ActionType.FetchHotelDataError);
