import { ActionType, FETCH_OFFERS_ERROR_MESSAGE } from '../../const';
import { ActionTypes } from '../../types/action';
import { OfferStateType } from '../../types/state';

const initialState: OfferStateType = {
  items: [],
  isOffersLoadded: false,
  error: null,
  sortBy: '',
};

export const offerReducer = (state = initialState, action: ActionTypes): OfferStateType => {
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
    default:
      return state;
  }
};
