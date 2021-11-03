import { createAction } from '@reduxjs/toolkit';

import { ActionType, ErrorMessages } from '../../const';
import { HotelInfo } from '../../types/hotel';

export const fetchHotelDataAction = createAction(ActionType.FetchHotelData);

export const setHotelPageDataAction = createAction(ActionType.SetHotelPageData, (hotel: HotelInfo) => ({
  payload: hotel,
}));

export const fetchHotelDataErrorAction = createAction(
  ActionType.FetchHotelDataError,
  (message: ErrorMessages) => ({
    payload: message,
  }),
);

export const updateHotelPageData = createAction(ActionType.UpdateHotelPageData, (hotel: HotelInfo) => ({
  payload: hotel,
}));

export const updateHotelPageDataError = createAction(
  ActionType.UpdateHotelPageDataError,
  (message: ErrorMessages) => ({
    payload: message,
  }),
);
