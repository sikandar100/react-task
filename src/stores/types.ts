import store from "stores";

interface IRocket {}
interface IRockets {
  [id: string]: IRocket;
}

interface ILaunch {}

interface ILaunches {
  [id: string]: ILaunch;
}
export interface IStore {
  rockets: IRockets;
  launches: ILaunches;
}
export enum EAction {}
export interface IAction {
  type: EAction;
}

export type IAppDispatch = typeof store.dispatch;
