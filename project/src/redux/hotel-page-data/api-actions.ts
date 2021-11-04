import { APIRoutes, AppRoutes, AuthorizationStatus, ErrorMessages, reviewPostStatus } from '../../const';
import { ThunkActionResult } from '../../types/action';
import { ApiHotelData, ApiHotelReviewData } from '../../types/api';
import { HotelInfo } from '../../types/hotel';
import { HotelReviewPost } from '../../types/review';
import { adaptHotelDataToClient } from '../../utils/adapters/hotel';
import { adaptHotelReviewsToClient } from '../../utils/adapters/reviews';
import { redirectToRouteAction } from '../user-process-data/user-process-actions';
import {
  fetchHotelDataAction,
  fetchHotelDataErrorAction,
  setHotelPageDataAction,
  updateHotelPageData,
  updateHotelPageDataError
} from './hotel-page-actions';
import {
  fetchNearbyHotelsAction,
  fetchNearbyHotelsErrorAction,
  setNearbyHotelsAction
} from './nearby-hotels-actions';
import {
  fetchReviewsDataAction,
  fetchReviewsErrorAction,
  setReviewsDataAction,
  addNewReviewErrorAction,
  setLoadingStatusPostReviewAction
} from './reviews-actions';

export const loadHotelDataAction = (hotelId: number): ThunkActionResult =>
  async function (dispatch, _getState, api): Promise<void> {
    dispatch(fetchHotelDataAction());
    try {
      const { data } = await api.get<ApiHotelData>(`${APIRoutes.Hotels}/${hotelId}`);
      const adaptedData = adaptHotelDataToClient(data);

      dispatch(setHotelPageDataAction(adaptedData));
    } catch (e) {
      dispatch(fetchHotelDataErrorAction(ErrorMessages.FetchHotelData));
    }
  };

export const loadReviewsDataAction = (hotelId: number): ThunkActionResult =>
  async function (dispatch, _getState, api): Promise<void> {
    dispatch(fetchReviewsDataAction());
    try {
      const { data } = await api.get<ApiHotelReviewData[]>(`${APIRoutes.HotelReviews}/${hotelId}`);
      const adaptedData = data.map((review) => adaptHotelReviewsToClient(review));

      dispatch(setReviewsDataAction(adaptedData));
    } catch (e) {
      dispatch(fetchReviewsErrorAction(ErrorMessages.FetchReviewsData));
    }
  };

export const loadNearbyHotelsDataAction = (hotelId: number): ThunkActionResult =>
  async function (dispatch, _getState, api): Promise<void> {
    dispatch(fetchNearbyHotelsAction());
    try {
      const { data } = await api.get<ApiHotelData[]>(`${APIRoutes.Hotels}/${hotelId}/nearby`);
      const adaptedData = data.map((hotel) => adaptHotelDataToClient(hotel));

      dispatch(setNearbyHotelsAction(adaptedData));
    } catch (e) {
      dispatch(fetchNearbyHotelsErrorAction(ErrorMessages.FetchNearbyHotels));
    }
  };

export const postReviewAction = (hotelId: number, reviewPost: HotelReviewPost): ThunkActionResult =>
  async function (dispatch, _getState, api): Promise<void> {
    dispatch(setLoadingStatusPostReviewAction(reviewPostStatus.Loading));
    try {
      const { data } = await api.post<ApiHotelReviewData[]>(
        `${APIRoutes.HotelReviews}/${hotelId}`,
        reviewPost,
      );
      const adaptedData = data.map((review) => adaptHotelReviewsToClient(review));

      dispatch(setLoadingStatusPostReviewAction(reviewPostStatus.Success));
      dispatch(setReviewsDataAction(adaptedData));
    } catch (e) {
      dispatch(addNewReviewErrorAction(ErrorMessages.AddHotelReview));
    }
  };

export const changeHotelFavoriteStatus = (hotel: HotelInfo): ThunkActionResult =>
  async function (dispatch, getState, api): Promise<void> {
    try {
      const currentHotel = hotel;
      const isFavorite = currentHotel?.isFavorite;
      const authorizationStatus = getState().USER_PROCESS.authorizationStatus;

      if (authorizationStatus === AuthorizationStatus.NoAuth) {
        dispatch(redirectToRouteAction(AppRoutes.Login));
        return;
      }

      const { data } = await api.post<ApiHotelData>(
        `${APIRoutes.FavoriteHotels}/${currentHotel.id}/${isFavorite ? '0' : '1'}`,
      );
      const newHotel = adaptHotelDataToClient(data);

      dispatch(updateHotelPageData(newHotel));
    } catch (e) {
      dispatch(updateHotelPageDataError(ErrorMessages.UpdateHotelPageData));
    }
  };
