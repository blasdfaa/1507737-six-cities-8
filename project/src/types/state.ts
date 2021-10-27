import { OfferFullType } from './offer';
import { UserInfoType } from './user';

export type UserStateType = {
  authorizationStatus: string;
  authInfo: UserInfoType | null;
  authorizationError: string | null;
};

export type OfferStateType = {
  items: OfferFullType[];
  isOffersLoadded: boolean;
  error: null | string;
  sortBy: string;
};

export type CategoryStateType = string;

export type GlobalStateType = {
  offers: OfferStateType;
  category: CategoryStateType;
  user: UserStateType;
};
