import { APIRoutes, ErrorMessages } from '../../const';
import { ThunkActionResult } from '../../types/action';
import { ApiHotelData, ApiHotelReviewData } from '../../types/api';
import { adaptHotelDataToClient } from '../../utils/adapters/hotel';
import { adaptHotelReviewsToClient } from '../../utils/adapters/reviews';
import {
  fetchHotelDataAction,
  fetchHotelDataErrorAction,
  setHotelPageDataAction,
} from './hotel-page-actions';
import { fetchReviewsDataAction, fetchReviewsErrorAction, setReviewsDataAction } from './reviews-actions';

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
