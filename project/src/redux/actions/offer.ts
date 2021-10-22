import { ActionType } from '../../const';

export const fetchOffersAction = () =>
  ({
    type: ActionType.fetchOffers,
  } as const);

export const fetchOffersSuccessAction = () =>
  ({
    type: ActionType.fetchOffersSuccess,
  } as const);

export const fetchOffersErrorAction = () =>
  ({
    type: ActionType.fetchOffersError,
  } as const);

export const setOffersSortOptionAction = (option: string) =>
  ({
    type: ActionType.setOffersSortOption,
    payload: option,
  } as const);
