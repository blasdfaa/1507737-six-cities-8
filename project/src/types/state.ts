import { IOfferFull } from './offer';

export interface IOfferState {
  items: IOfferFull[];
  isLoading: boolean;
  error: null | string;
}

export type ICategoryState = string;
export type StateType = {
  offers: IOfferState;
  category: ICategoryState;
};
