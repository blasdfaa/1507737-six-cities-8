import { setCategoryAction } from '../redux/actions/category';
import { fetchOffersAction, fetchOffersErrorAction, fetchOffersSuccessAction } from '../redux/actions/offer';

export type ActionTypes =
  | ReturnType<typeof fetchOffersAction>
  | ReturnType<typeof fetchOffersSuccessAction>
  | ReturnType<typeof fetchOffersErrorAction>
  | ReturnType<typeof setCategoryAction>;
