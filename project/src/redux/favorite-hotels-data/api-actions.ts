import { toast } from 'react-toastify';

import { APIRoutes, ErrorMessages } from '../../const';
import { ThunkActionResult } from '../../types/action';
import { ApiHotelData } from '../../types/api';
import { adaptHotelDataToClient } from '../../utils/adapters/hotel';
import { fetchFavoriteHotelsAction, setFavoriteHotelsAction } from './favorite-hotels-actions';

export const loadFavoriteOffersAction = (): ThunkActionResult =>
  async function (dispatch, _getState, api): Promise<void> {
    dispatch(fetchFavoriteHotelsAction());
    try {
      const { data } = await api.get<ApiHotelData[]>(APIRoutes.FavoriteHotels);
      const adaptedData = data.map((hotel) => adaptHotelDataToClient(hotel));

      dispatch(setFavoriteHotelsAction(adaptedData));
    } catch (e) {
      toast.error(ErrorMessages.FetchFavoriteHotels);
    }
  };
