import { ActionType } from '../../const';

export const setCategoryAction = (category: string) =>
  ({
    type: ActionType.setCategory,
    payload: category,
  } as const);
