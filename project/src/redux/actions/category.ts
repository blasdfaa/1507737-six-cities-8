import { ActionType } from '../../const';

export const setCategoryAction = (category: string) =>
  ({
    type: ActionType.SetCategory,
    payload: category,
  } as const);
