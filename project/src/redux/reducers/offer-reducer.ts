import { ActionType } from '../../const';
import { OfferItems } from '../../mocks/offers';
import { ActionTypes } from '../../types/action';
import { OfferStateType } from '../../types/state';

export const FETCH_OFFERS_ERROR_TEXT = 'text';

const initialState: OfferStateType = {
  items: [],
  isLoading: true,
  error: null,
  sortBy: '',
};

export const offerReducer = (state = initialState, action: ActionTypes): OfferStateType => {
  switch (action.type) {
    case ActionType.fetchOffers:
      return { ...state, items: [], isLoading: true, error: null };

    case ActionType.fetchOffersSuccess: {
      const offers = OfferItems;
      return { ...state, items: offers, isLoading: false, error: null };
    }

    case ActionType.fetchOffersError:
      return { ...state, items: [], isLoading: false, error: FETCH_OFFERS_ERROR_TEXT };

    case ActionType.setOffersSortOption:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};
