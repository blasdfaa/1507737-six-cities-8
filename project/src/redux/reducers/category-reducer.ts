import { ActionType } from '../../const';
import { ActionTypes } from '../../types/action';
import { ICategoryState } from '../../types/state';

const initialState: ICategoryState = 'Paris';

export const categoryReducer = (state = initialState, action: ActionTypes): ICategoryState => {
  switch (action.type) {
    case ActionType.setCategory:
      return (state = action.payload);
    default:
      return state;
  }
};
