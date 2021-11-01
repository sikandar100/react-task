import { EAction, IAction } from "./types";

export const increment = (): IAction => ({
  type: EAction.INCREMENT,
});
export const decrement = (): IAction => ({
  type: EAction.DECREMENT,
});
