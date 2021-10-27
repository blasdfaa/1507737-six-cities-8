import type { AxiosInstance } from 'axios';
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { setCategoryAction } from '../redux/actions/category';
import {
  setOffersAction,
  setOffersErrorAction,
  setOffersSuccessAction,
  setOffersSortOptionAction
} from '../redux/actions/offer';
import {
  redirectToRouteAction,
  requireAuthorizationAction,
  requireAuthorizationErrorAction,
  requireLogoutAction,
  setAuthInfoAction
} from '../redux/actions/user';
import { GlobalStateType } from './state';

export type ActionTypes =
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

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  GlobalStateType,
  AxiosInstance,
  ActionTypes
>;

export type ThunkAppDispatch = ThunkDispatch<GlobalStateType, AxiosInstance, ActionTypes>;
