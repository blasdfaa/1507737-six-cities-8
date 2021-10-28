import { ActionType, FETCH_OFFERS_ERROR_MESSAGE } from '../../const';
import { Action } from '../../types/action';
import { OfferState } from '../../types/state';

const initialState: OfferState = {
  items: [],
  isOffersLoadded: false,
  error: null,
  sortBy: 'Popular',
  selectedCategory: 'Paris',
  reviews: [],
};

export const offerReducer = (state = initialState, action: Action): OfferState => {
  switch (action.type) {
    case ActionType.SetOffers:
      return { ...state, items: [], isOffersLoadded: false, error: null };

    case ActionType.SetOffersSuccess: {
      const offers = action.payload;

      return { ...state, items: offers, isOffersLoadded: true, error: null };
    }

    case ActionType.SetOffersError:
      return { ...state, items: [], isOffersLoadded: true, error: FETCH_OFFERS_ERROR_MESSAGE };

    case ActionType.SetOffersSortOption:
      return { ...state, sortBy: action.payload };

    case ActionType.SetCategory:
      return { ...state, selectedCategory: action.payload };

    default:
      return state;
  }
};
