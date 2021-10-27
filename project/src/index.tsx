import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import { rootReducer } from './redux/reducers/root-reducer';
import { createAPI } from './services/api';
import { requireAuthorizationAction } from './redux/actions/user';
import { AuthorizationStatus } from './const';
import { ThunkAppDispatch } from './types/action';
import { checkAuthAction, loadOffersAction } from './redux/actions/api';
import { redirect } from './middlewares/redirect';

const api = createAPI(() => store.dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth)));

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)), applyMiddleware(redirect)),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(loadOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
