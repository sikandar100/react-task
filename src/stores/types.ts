import store from "stores";

export interface ITodo {
  id: string;
  title: string;
  userId: string;
  completed: boolean;
}
export interface ITodos {
  [id: string]: ITodo;
}

export interface IState {
  todos: ITodos;
}
export enum EAction {
  UPDATE = "UPDATE",
}
export interface IAction {
  type: EAction;
  payload: IState;
}

export type IAppDispatch = typeof store.dispatch;
