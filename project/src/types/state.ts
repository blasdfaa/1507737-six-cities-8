import { OfferFullType } from './offer';

export type OfferStateType = {
  items: OfferFullType[];
  isLoading: boolean;
  error: null | string;
  sortBy: string;
};

export type CategoryStateType = string;

export type StateType = {
  offers: OfferStateType;
  category: CategoryStateType;
};
