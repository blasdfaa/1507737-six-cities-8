export const ERROR_404_MESSAGE =
  'HE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.';
export const NEAR_OFFERS_COUNT = 3;
export const DEFAULT_MARKER_URL = './img/pin.svg';
export const SELECTED_MARKER_URL = './img/pin-active.svg';

export const OfferCities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SortOfferOptions: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

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

export enum OfferCardType {
  Cities = 'cities',
  Favorite = 'favorite',
  Near = 'near',
}
