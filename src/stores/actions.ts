/**
 * actions are functions used to perform async operations i.e. ajax / network requests to fetch/update data
 * actions can use dispatch to perform actions to store i.e. mutate store
 */
import { ILaunch } from "models/launch.model";
import { IRocket } from "models/rocket.model";
import { EAction, IAppDispatch, ILaunches, IRockets, IStore } from "./types";

export const update = (dispatch: IAppDispatch, update: Partial<IStore>) =>
  dispatch({
    type: EAction.UPDATE,
    payload: update,
  });

export const getLaunches =
  (offset = 0, limit = 10) =>
  async (dispatch: IAppDispatch) => {
    const launches: ILaunch[] = await (
      await fetch(
        `https://api.spacexdata.com/v3/launches?sort=launch_date_utc&order=desc&offset=${offset}&limit=${limit}`
      )
    ).json();

    update(dispatch, {
      launches: launches.reduce(
        (pv, cv) => ({ ...pv, [cv.flight_number]: cv }),
        {} as ILaunches
      ),
    });
  };

export const getLaunch =
  (flight_number: string) =>
  async (dispatch: IAppDispatch, getState: () => IStore) => {
    let launch = getState().launches[flight_number];
    if (!launch)
      launch = await (
        await fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)
      ).json();

    update(dispatch, {
      launches: {
        [launch.flight_number]: launch,
      },
    });
  };

export const getRockets =
  (offset = 0, limit = 10) =>
  async (dispatch: IAppDispatch) => {
    const rockets: IRocket[] = await (
      await fetch(
        `https://api.spacexdata.com/v3/rockets?offset=${offset}&limit=${limit}`
      )
    ).json();

    update(dispatch, {
      rockets: rockets.reduce(
        (pv, cv) => ({ ...pv, [cv.rocket_id]: cv }),
        {} as IRockets
      ),
    });
  };

export const getRocket =
  (rocket_id: string) =>
  async (dispatch: IAppDispatch, getState: () => IStore) => {
    let rocket = getState().rockets[rocket_id];
    if (!rocket)
      rocket = await (
        await fetch(`https://api.spacexdata.com/v3/rockets/${rocket_id}`)
      ).json();

    update(dispatch, {
      rockets: {
        [rocket.rocket_id]: rocket,
      },
    });
  };
