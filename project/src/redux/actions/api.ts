import { APIRoutes, AppRoutes, AuthorizationStatus } from '../../const';
import { removeToken, setToken } from '../../services/token';
import { ThunkActionResult } from '../../types/action';
import { OfferFullType } from '../../types/offer';
import { AuthDataType, UserInfoType } from '../../types/user';
import { adaptOffersToClient } from '../../utils/adapters/offers';
import { adaptAuthInfoToClient } from '../../utils/adapters/user';
import { setOffersAction, setOffersErrorAction, setOffersSuccessAction } from './offer';
import {
  redirectToRouteAction,
  requireAuthorizationAction,
  requireAuthorizationErrorAction,
  requireLogoutAction,
  setAuthInfoAction
} from './user';

export const loadOffersAction = (): ThunkActionResult =>
  async function (dispatch, _getState, api): Promise<void> {
    dispatch(setOffersAction());
    try {
      const { data } = await api.get<OfferFullType[]>(APIRoutes.Offers);
      const adaptedData = data.map((offer) => adaptOffersToClient(offer));

      dispatch(setOffersSuccessAction(adaptedData));
    } catch (e) {
      dispatch(setOffersErrorAction());
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async function (dispatch, _getState, api) {
    try {
      const response = await api.get(APIRoutes.Login);

      if (response.status === 200) {
        const adaptedData = adaptAuthInfoToClient(response.data);

        dispatch(setAuthInfoAction(adaptedData));
        dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
      }
    } catch (e) {
      dispatch(requireAuthorizationErrorAction());
    }
  };

export const loginAction = ({ login: email, password }: AuthDataType): ThunkActionResult =>
  async function (dispatch, _getState, api) {
    const { data } = await api.post<UserInfoType>(APIRoutes.Login, { email, password });
    const adaptedData = adaptAuthInfoToClient(data);

    setToken(data.token);
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    dispatch(setAuthInfoAction(adaptedData));
    dispatch(redirectToRouteAction(AppRoutes.Home));
  };

export const logoutAction = (): ThunkActionResult =>
  async function (dispatch, _getState, api) {
    api.delete(APIRoutes.Logout);
    removeToken();
    dispatch(requireLogoutAction());
  };
