import { ActionType, AppRoutes, AuthorizationStatus } from '../../const';
import { UserInfo } from '../../types/user';

export const requireAuthorizationAction = (authStatus: AuthorizationStatus) =>
  ({
    type: ActionType.RequireAuthorization,
    payload: authStatus,
  } as const);

export const requireAuthorizationErrorAction = () =>
  ({
    type: ActionType.RequireAuthorizationError,
  } as const);

export const setAuthInfoAction = (authInfo: UserInfo) =>
  ({
    type: ActionType.SetAuthInfo,
    payload: authInfo,
  } as const);

export const requireLogoutAction = () =>
  ({
    type: ActionType.RequireLogout,
  } as const);

export const redirectToRouteAction = (url: AppRoutes) =>
  ({
    type: ActionType.RedirectToRoute,
    payload: url,
  } as const);
