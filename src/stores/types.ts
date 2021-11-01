import { ILaunch } from "models/launch.model";
import { IRocket } from "models/rocket.model";

import store from "stores";
import { update } from "./actions";

export type ActionType<Function extends (...params: any) => any> =
  Parameters<Function>[1];

export interface IRockets {
  [id: string]: IRocket;
}

export interface ILaunches {
  [id: string]: ILaunch;
}
export interface IStore {
  rockets: IRockets;
  launches: ILaunches;
}
export enum EAction {
  UPDATE = "UPDATE",
}
export interface IAction {
  type: EAction;
  payload: ActionType<typeof update>;
}

export type IAppDispatch = typeof store.dispatch;
