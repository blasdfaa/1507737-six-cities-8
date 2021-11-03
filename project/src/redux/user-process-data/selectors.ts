import { AuthorizationStatus } from '../../const';
import { RootState } from '../../types/state';
import { UserData } from '../../types/user';

export const getAuthorizationStatus = (state: RootState): AuthorizationStatus =>
  state.USER_PROCESS.authorizationStatus;

export const getUserAuthInfo = (state: RootState): UserData | null => state.USER_PROCESS.userData;
