import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../../const';
import { UserState } from '../../types/state';
import {
  requireLogoutAction,
  setUserInfoAction,
  setAuthorizationStatusAction,
  setAuthorizationStatusErrorAction
} from './user-process-actions';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  errorMessage: null,
};

export const userProcessReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthorizationStatusAction, (state, action) => {
      const authStatus = action.payload;

      state.authorizationStatus = authStatus;
      state.errorMessage = null;
    })
    .addCase(setAuthorizationStatusErrorAction, (state, action) => {
      const errorMessage = action.payload;

      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.errorMessage = errorMessage;
    })
    .addCase(setUserInfoAction, (state, action) => {
      const userData = action.payload;

      state.userData = userData;
    })
    .addCase(requireLogoutAction, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.userData = null;
    })
    .addDefaultCase((state) => state);
});
