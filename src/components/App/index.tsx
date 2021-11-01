import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "stores";
import { decrement, increment } from "stores/actions";

import { IState } from "stores/types";

const App: FC = () => {
  const count = useSelector((store: IState) => store.count);
  const dispatch = useDispatch<typeof store.dispatch>();

  const onDecrement = () => dispatch(decrement());
  const onIncrement = () => dispatch(increment());

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

export default App;
