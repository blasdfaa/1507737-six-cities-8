import { Middleware } from 'redux';

import { ActionType } from '../const';
import browserHistory from '../services/browser-history';
import { userReducer } from '../redux/reducers/user-reducer';

type Reducer = ReturnType<typeof userReducer>;

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action) => {
  if (action.type === ActionType.RedirectToRoute) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
