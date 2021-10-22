import { combineReducers } from 'redux';
import { categoryReducer } from './category-reducer';
import { offerReducer } from './offer-reducer';

export const rootReducer = combineReducers({
  offers: offerReducer,
  category: categoryReducer,
});
