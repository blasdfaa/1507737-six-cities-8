import { AuthorizationStatus } from '../const';
import { OfferCategory, OfferInfo, OfferSortOption } from './offer';
import { OfferReview } from './review';
import { UserInfo } from './user';

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  authInfo: UserInfo | null;
  authorizationError: string | null;
};

export type OfferState = {
  items: OfferInfo[] | [];
  isOffersLoadded: boolean;
  error: string | null;
  sortBy: OfferSortOption;
  selectedCategory: OfferCategory;
  reviews: OfferReview[] | [];
};

export type GlobalState = {
  offers: OfferState;
  user: UserState;
};
