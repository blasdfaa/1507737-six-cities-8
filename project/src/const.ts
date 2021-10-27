export const ERROR_404_MESSAGE =
  'HE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.';
export const NEAR_OFFERS_COUNT = 3;
export const DEFAULT_MARKER_URL = './img/pin.svg';
export const SELECTED_MARKER_URL = './img/pin-active.svg';
export const EMAIL_VALID_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_VALID_REGEX = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
export const EMAIL_VALIDATION_MESSAGE = 'Please enter a valid email address.';
export const PASSWORD_VALIDATION_MESSAGE = 'Please enter a valid password.';
export const AUTH_USER_ERROR_MESSAGE = 'User authorization error';
export const FETCH_OFFERS_ERROR_MESSAGE = 'Error loading available offers';

export const categoryNames: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const SortOfferOptions: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum HttpCode {
  Unauthorized = 401,
}

export enum APIRoutes {
  Offers = '/hotels',
  OffersById = '/hotels/:id',
  NearbyOffers = '/hotels/:id/nearby',
  FavoritesOffers = '/favorite',
  OfferStatus = '/favorite/:id/:status',
  OfferComments = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

export enum SortOptions {
  ByPopular = 'Popular',
  ByPriceToHight = 'Price: low to high',
  ByPriceToLow = 'Price: high to low',
  ByRating = 'Top rated first',
}

export enum AppRoutes {
  Home = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferCardVariant {
  Cities = 'cities',
  Favorite = 'favorite',
  Near = 'near',
}

export enum ActionType {
  RequireAuthorization = 'user/requireAuthorization',
  RequireAuthorizationError = 'user/requireAuthorizationError',
  RequireLogout = 'user/requireLogout',
  SetAuthInfo = 'user/setAuthInfo',
  RedirectToRoute = 'user/redirectToRoute',

  SetOffers = 'data/setOffers',
  SetOffersSuccess = 'data/setOffersSuccess',
  SetOffersError = 'data/setOffersError',

  SetOffersSortOption = 'offers/setOffersSortOption',

  SetCategory = 'category/setCategory',
}
