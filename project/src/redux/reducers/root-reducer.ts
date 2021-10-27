import { combineReducers } from 'redux';
import { categoryReducer } from './category-reducer';
import { offerReducer } from './offer-reducer';
import { userReducer } from './user-reducer';

export const rootReducer = combineReducers({
  offers: offerReducer,
  category: categoryReducer,
  user: userReducer,
});
