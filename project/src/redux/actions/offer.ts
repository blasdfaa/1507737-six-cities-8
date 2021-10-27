import { ActionType } from '../../const';
import { OfferFullType } from '../../types/offer';

export const setOffersAction = () =>
  ({
    type: ActionType.SetOffers,
  } as const);

export const setOffersSuccessAction = (offers: OfferFullType[]) =>
  ({
    type: ActionType.SetOffersSuccess,
    payload: offers,
  } as const);

export const setOffersErrorAction = () =>
  ({
    type: ActionType.SetOffersError,
  } as const);

export const setOffersSortOptionAction = (option: string) =>
  ({
    type: ActionType.SetOffersSortOption,
    payload: option,
  } as const);
