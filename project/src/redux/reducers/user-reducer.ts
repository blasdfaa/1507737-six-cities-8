import { ActionType, AuthorizationStatus, AUTH_USER_ERROR_MESSAGE } from '../../const';
import { Action } from '../../types/action';
import { UserState } from '../../types/state';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authInfo: null,
  authorizationError: null,
};

export const userReducer = (state = initialState, action: Action): UserState => {
  switch (action.type) {
    case ActionType.RequireAuthorization: {
      const authStatus = action.payload;

      return { ...state, authorizationStatus: authStatus };
    }

    case ActionType.RequireAuthorizationError:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
        authorizationError: AUTH_USER_ERROR_MESSAGE,
      };

    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth, authInfo: null };

    case ActionType.SetAuthInfo: {
      const userData = action.payload;

      return { ...state, authInfo: userData };
    }

    default:
      return state;
  }
};
