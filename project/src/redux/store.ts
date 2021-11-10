import { configureStore } from '@reduxjs/toolkit';

import { redirect } from './middlewares/redirect';
import { rootReducer } from './root-reducer';
import { createAPI } from '../services/api';
import { setAuthorizationStatusAction } from './user-process-data/user-process-actions';
import { AuthorizationStatus } from '../const';

const api = createAPI(() => store.dispatch(setAuthorizationStatusAction(AuthorizationStatus.NoAuth)));

export const store = configureStore({
  reducer: rootReducer,
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
