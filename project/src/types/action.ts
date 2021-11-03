import type { AxiosInstance } from 'axios';
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';
import type { Action } from 'redux';

import type { RootState } from './state';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<RootState, AxiosInstance, Action>;
