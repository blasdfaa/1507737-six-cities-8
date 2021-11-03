import { APIRoutes, AppRoutes, AuthorizationStatus, ErrorMessages } from '../../const';
import { ThunkActionResult } from '../../types/action';
import { ApiHotelData } from '../../types/api';
import { HotelInfo } from '../../types/hotel';
import { adaptHotelDataToClient } from '../../utils/adapters/hotel';
import { redirectToRouteAction } from '../user-process-data/user-process-actions';
import {
  fetchAllHotelsAction,
  fetchAllHotelsErrorAction,
  setAllHotelsAction,
  updateHotelAction
} from './all-hotels-actions';

export const fetchAllHotels = (): ThunkActionResult =>
  async function (dispatch, _getState, api): Promise<void> {
    dispatch(fetchAllHotelsAction());
    try {
      const { data } = await api.get<ApiHotelData[]>(APIRoutes.Hotels);
      const adaptedData = data.map((hotel) => adaptHotelDataToClient(hotel));

      dispatch(setAllHotelsAction(adaptedData));
    } catch (e) {
      dispatch(fetchAllHotelsErrorAction(ErrorMessages.FetchAllHotels));
    }
  };

export const changeAllHotelsFavoriteStatus = (hotel: HotelInfo): ThunkActionResult =>
  async function (dispatch, getState, api): Promise<void> {
    try {
      const currentHotel = hotel;
      const isFavorite = currentHotel?.isFavorite;
      const authorizationStatus = getState().USER_PROCESS.authorizationStatus;

      if (authorizationStatus === AuthorizationStatus.NoAuth) {
        dispatch(redirectToRouteAction(AppRoutes.Login));
        return;
      }

      const { data } = await api.post<ApiHotelData>(
        `${APIRoutes.FavoriteHotels}/${currentHotel.id}/${isFavorite ? '0' : '1'}`,
      );
      const newHotel = adaptHotelDataToClient(data);

      dispatch(updateHotelAction(newHotel));
    } catch (e) {
      dispatch(fetchAllHotelsErrorAction(ErrorMessages.ChangeFavoriteStatusHotel));
    }
  };
