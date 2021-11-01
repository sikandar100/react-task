export interface IState {
  count: number;
}
export enum EAction {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}
export interface IAction {
  type: EAction;
}
