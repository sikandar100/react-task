/**
 * reducers mutate the state based on action
 */

import { IAction, IStore } from "./types";

const initialState: IStore = {
  launches: {},
  rockets: {},
};

const reducer = (state = initialState, action: IAction): IStore => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default reducer;
