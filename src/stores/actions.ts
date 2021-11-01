import { EAction, IAppDispatch, ITodo, ITodos } from "./types";

export const fetchTodos = () => async (dispatch: IAppDispatch) => {
  const response: ITodo[] = await (
    await fetch("https://jsonplaceholder.typicode.com/todos")
  ).json();

  const todos = response.reduce(
    (pv, cv) => ({ ...pv, [cv.id]: cv }),
    {} as ITodos
  );

  dispatch({
    type: EAction.UPDATE,
    payload: { todos },
  });
};
