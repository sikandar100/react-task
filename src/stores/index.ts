import { configureStore } from "@reduxjs/toolkit";
import produce from "immer";
import { EAction, IAction, IState } from "./types";

const initialState: IState = {
  count: 0,
};

const reducer = (state = initialState, action: IAction): IState => {
  const { type } = action;
  switch (type) {
    case EAction.DECREMENT: {
      return produce(state, (draft) => {
        draft.count--;
      });
    }
    case EAction.INCREMENT: {
      return produce(state, (draft) => {
        draft.count++;
      });
    }
  }

  return state;
};

const store = configureStore({
  reducer,
});

export default store;
