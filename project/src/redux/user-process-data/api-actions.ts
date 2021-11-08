import { toast } from 'react-toastify';

import { APIRoutes, AppRoutes, AuthorizationStatus, ErrorMessages } from '../../const';
import { removeToken, setToken } from '../../services/token';
import { ThunkActionResult } from '../../types/action';
import { ApiUserInfoData } from '../../types/api';
import { AuthData } from '../../types/user';
import { adaptUserDataToClient } from '../../utils/adapters/user';
import {
  redirectToRouteAction,
  requireLogoutAction,
  setAuthorizationStatusAction,
  setUserInfoAction
} from './user-process-actions';

export const checkAuthStatusAction = (): ThunkActionResult =>
  async function (dispatch, _getState, api): Promise<void> {
    try {
      const response = await api.get(APIRoutes.Login);

      if (response?.data) {
        const adaptedData = adaptUserDataToClient(response.data);

        dispatch(setUserInfoAction(adaptedData));
        dispatch(setAuthorizationStatusAction(AuthorizationStatus.Auth));
      }
    } catch (e) {
      toast.error(ErrorMessages.CheckAuthorization);
    }
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async function (dispatch, getState, api): Promise<void> {
    try {
      const { data } = await api.post<ApiUserInfoData>(APIRoutes.Login, { email, password });
      const adaptedData = adaptUserDataToClient(data);

      setToken(data.token);
      dispatch(setAuthorizationStatusAction(AuthorizationStatus.Auth));
      dispatch(setUserInfoAction(adaptedData));
      dispatch(redirectToRouteAction(AppRoutes.Home));

      const userName = getState().USER_PROCESS.userData?.name;
      toast.success(`you are logged in as ${userName}`);
    } catch (e) {
      toast.error(ErrorMessages.InvalidAccoutData);
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async function (dispatch, _getState, api): Promise<void> {
    try {
      await api.delete(APIRoutes.Logout);

      removeToken();
      dispatch(requireLogoutAction());
    } catch (e) {
      toast.error(ErrorMessages.requireLogout);
    }
  };
