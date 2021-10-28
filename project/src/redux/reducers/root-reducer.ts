import { combineReducers } from 'redux';
import { offerReducer } from './offer-reducer';
import { userReducer } from './user-reducer';

export const rootReducer = combineReducers({
  offers: offerReducer,
  user: userReducer,
});
