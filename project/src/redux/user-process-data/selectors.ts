import { AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user';
import { RootState } from '../store';

export const getAuthorizationStatus = (state: RootState): AuthorizationStatus =>
  state.USER_PROCESS.authorizationStatus;

export const getUserAuthInfo = (state: RootState): UserData | null => state.USER_PROCESS.userData;
