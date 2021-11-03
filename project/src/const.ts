export const ERROR_404_MESSAGE =
  'HE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.';
export const NEAR_HOTELS_COUNT = 3;
export const DEFAULT_MARKER_URL = './img/pin.svg';
export const SELECTED_MARKER_URL = './img/pin-active.svg';
export const EMAIL_VALID_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_VALID_REGEX = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
export const EMAIL_VALIDATION_MESSAGE = 'Please enter a valid email address.';
export const PASSWORD_VALIDATION_MESSAGE = 'Please enter a valid password.';

export const HotelCategories = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export const HotelSortOptions = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

export enum HttpCode {
  OK = 200,
  Unauthorized = 401,
}

export enum APIRoutes {
  Hotels = '/hotels',
  FavoriteHotels = '/favorite',
  HotelReviews = '/comments',
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
  Hotel = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HotelCardVariant {
  Cities = 'cities',
  Favorite = 'favorite',
  Near = 'near',
}

export enum ActionType {
  SetAuthorizationStatus = 'user/setAuthorizationStatus',
  RequireLogout = 'user/requireLogout',
  SetUserInfo = 'user/setUserInfo',
  RedirectToRoute = 'user/redirectToRoute',

  FetchHotelData = 'data/fetchHotelData',
  FetchAllHotels = 'data/fetchAllHotels',
  FetchFavoriteHotels = 'data/fetchFavoriteHotels',
  FetchNearbyHotels = 'data/fetchNearbyHotels',
  FetchHotelReviews = 'data/fetchHotelReviews',

  SetAllHotels = 'hotel/setAllHotels',
  SetFavoriteHotels = 'hotel/setFavoriteHotels',
  SetNearbyHotels = 'hotel/setNearbyHotels',
  SetHotelPageData = 'hotel/setHotelPageData',
  UpdateHotel = 'hotel/updateHotel',
  UpdateHotelPageData = 'hotel/updateHotelPageData',
  SetSortOptionHotels = 'hotel/setSortOptionHotels',
  SetHotelsCategory = 'hotel/setHotelsCategory',

  SetHotelReviews = 'review/setHotelsReviews',
  AddNewHotelReview = 'review/addNewHotelReview',

  FetchHotelDataError = 'error/fetchHotelDataError',
  FetchAllHotelsError = 'error/fetchAllHotelsError',
  FetchFavoriteHotelsError = 'error/fetchFavoriteHotelsError',
  FetchNearbyHotelsError = 'error/fetchNearbyHotelsError',
  FetchHotelReviewsError = 'error/fetchHotelReviewsError',
  SetAuthorizationStatusError = 'error/setAuthorizationStatusError',
  AddNewHotelReviewError = 'error/addNewHotelReviewError',
  UpdateHotelPageDataError = 'error/updateHotelPageDataError',
}

export enum ErrorMessages {
  CheckAuthorization = 'Authorization error',
  InvalidAccoutData = 'The email address or password you entered isn\'t connected to an account.',
  ChangeFavoriteStatusHotel = 'An error occurred while changing the status. try again',
  FetchAllHotels = 'Error loading available hotels',
  FetchFavoriteHotels = 'Error loading favorite hotels',
  FetchNearbyHotels = 'Error loading nearby hotels',
  FetchHotelData = 'Error loading hotel information',
  FetchReviewsData = 'Error loading hotel reviews',
  AddHotelReview = 'Error while adding a review',
  UpdateHotelPageData = 'Error updating hotel data',
}
