import { IOfferFull } from './offer';

export interface IOfferState {
  items: IOfferFull[];
  isLoading: boolean;
  error: null | string;
}

export type ICategoryState = string;
export interface IState {
  offers: IOfferState;
  category: ICategoryState;
}
