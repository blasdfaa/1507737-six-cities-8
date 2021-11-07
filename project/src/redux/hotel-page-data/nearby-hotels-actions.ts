import { createAction } from '@reduxjs/toolkit';

import { ActionType } from '../../const';
import { HotelInfo } from '../../types/hotel';

export const fetchNearbyHotelsAction = createAction(ActionType.FetchNearbyHotels);

export const setNearbyHotelsAction = createAction(ActionType.SetNearbyHotels, (hotels: HotelInfo[]) => ({
  payload: hotels,
}));
