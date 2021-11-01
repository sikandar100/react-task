/**
 * reducers mutate the state based on action
 */

import produce from "immer";
import { update } from "./actions";
import { ActionType, EAction, IAction, IStore } from "./types";

const initialState: IStore = {
  launches: {},
  rockets: {},
};

const reducer = (state = initialState, action: IAction): IStore => {
  const { type } = action;
  switch (type) {
    case EAction.UPDATE:
      return produce(state, (draft) => {
        const updates = action.payload as ActionType<typeof update>;
        Object.assign(draft.launches, updates.launches);
        Object.assign(draft.rockets, updates.rockets);
      });
    default:
      return state;
  }
};

export default reducer;
