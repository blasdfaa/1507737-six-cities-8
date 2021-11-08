import type { AxiosInstance } from 'axios';
import type { Action } from 'redux';
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { RootState } from '../redux/store';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<RootState, AxiosInstance, Action>;
