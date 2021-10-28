import type { AxiosInstance } from 'axios';
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { GlobalState } from './state';
import {
  setOffersAction,
  setOffersErrorAction,
  setOffersSuccessAction,
  setOffersSortOptionAction,
  setCategoryAction
} from '../redux/actions/offer';
import {
  redirectToRouteAction,
  requireAuthorizationAction,
  requireAuthorizationErrorAction,
  requireLogoutAction,
  setAuthInfoAction
} from '../redux/actions/user';

export type Action =
  | ReturnType<typeof setOffersAction>
  | ReturnType<typeof setOffersSuccessAction>
  | ReturnType<typeof setOffersErrorAction>
  | ReturnType<typeof setCategoryAction>
  | ReturnType<typeof setOffersSortOptionAction>
  | ReturnType<typeof requireAuthorizationAction>
  | ReturnType<typeof requireAuthorizationErrorAction>
  | ReturnType<typeof requireLogoutAction>
  | ReturnType<typeof setAuthInfoAction>
  | ReturnType<typeof redirectToRouteAction>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, GlobalState, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<GlobalState, AxiosInstance, Action>;
