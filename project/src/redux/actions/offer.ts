import { ActionType } from '../../const';
import { OfferCategory, OfferInfo, OfferSortOption } from '../../types/offer';

export const setOffersAction = () =>
  ({
    type: ActionType.SetOffers,
  } as const);

export const setOffersSuccessAction = (offers: OfferInfo[]) =>
  ({
    type: ActionType.SetOffersSuccess,
    payload: offers,
  } as const);

export const setOffersErrorAction = () =>
  ({
    type: ActionType.SetOffersError,
  } as const);

export const setOffersSortOptionAction = (option: OfferSortOption) =>
  ({
    type: ActionType.SetOffersSortOption,
    payload: option,
  } as const);

export const setCategoryAction = (category: OfferCategory) =>
  ({
    type: ActionType.SetCategory,
    payload: category,
  } as const);
