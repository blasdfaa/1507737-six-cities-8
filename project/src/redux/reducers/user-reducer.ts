import { ActionType, AuthorizationStatus, AUTH_USER_ERROR_MESSAGE } from '../../const';
import { ActionTypes } from '../../types/action';
import { UserStateType } from '../../types/state';

const initialState: UserStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authInfo: null,
  authorizationError: null,
};

export const userReducer = (state = initialState, action: ActionTypes): UserStateType => {
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
