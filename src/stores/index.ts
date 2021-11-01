import produce from "immer";
import { configureStore } from "@reduxjs/toolkit";
import { EAction, IAction, IState } from "./types";

const initialState: IState = {
  todos: {},
};

const reducer = (state = initialState, action: IAction): IState => {
  console.debug(state, action)
  
  const { type } = action;
  switch (type) {
    case EAction.UPDATE: {
      return produce(state, (draft) => {
        const { payload: update } = action;
        console.debug(update)
        Object.assign(draft, update);
      });
    }

    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

export default store;
