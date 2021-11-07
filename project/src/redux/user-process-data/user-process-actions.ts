import { createAction } from '@reduxjs/toolkit';

import { ActionType, AppRoutes, AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user';

export const requireLogoutAction = createAction(ActionType.RequireLogout);

export const setAuthorizationStatusAction = createAction(
  ActionType.SetAuthorizationStatus,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const setUserInfoAction = createAction(ActionType.SetUserInfo, (authInfo: UserData) => ({
  payload: authInfo,
}));

export const redirectToRouteAction = createAction(ActionType.RedirectToRoute, (url: AppRoutes) => ({
  payload: url,
}));
