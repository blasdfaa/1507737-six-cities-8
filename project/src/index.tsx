import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { rootReducer } from './redux/root-reducer';
import { createAPI } from './services/api';
import { setAuthorizationStatusAction } from './redux/user-process-data/user-process-actions';
import { AuthorizationStatus } from './const';
import { checkAuthStatusAction } from './redux/user-process-data/api-actions';
import { redirect } from './redux/middlewares/redirect';
import { fetchAllHotels } from './redux/all-hotels-data/api-actions';

const api = createAPI(() => store.dispatch(setAuthorizationStatusAction(AuthorizationStatus.NoAuth)));

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthStatusAction());
store.dispatch(fetchAllHotels());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
