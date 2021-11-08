import { createAction } from '@reduxjs/toolkit';

import { ActionType } from '../../const';
import { HotelInfo } from '../../types/hotel';

export const fetchFavoriteHotelsAction = createAction(ActionType.FetchFavoriteHotels);

export const setFavoriteHotelsAction = createAction(ActionType.SetFavoriteHotels, (hotels: HotelInfo[]) => ({
  payload: hotels,
}));
