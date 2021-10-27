import { ActionType } from '../../const';
import { ActionTypes } from '../../types/action';
import { CategoryStateType } from '../../types/state';

const initialState: CategoryStateType = 'Paris';

export const categoryReducer = (state = initialState, action: ActionTypes): CategoryStateType => {
  switch (action.type) {
    case ActionType.SetCategory:
      return (state = action.payload);
    default:
      return state;
  }
};
