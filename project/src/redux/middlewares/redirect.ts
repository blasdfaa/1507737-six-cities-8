import { Middleware } from 'redux';

import { ActionType } from '../../const';
import browserHistory from '../../services/browser-history';
import { RootState } from '../../types/state';

export const redirect: Middleware<unknown, RootState> = (_store) => (next) => (action) => {
  if (action.type === ActionType.RedirectToRoute) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
