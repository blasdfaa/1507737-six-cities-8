import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { checkAuthStatusAction } from './redux/user-process-data/api-actions';
import { fetchAllHotels } from './redux/all-hotels-data/api-actions';
import { store } from './redux/store';

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
