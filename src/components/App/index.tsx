import { FC, useState } from "react";

import styles from "./styles.module.css";

import useAppSelector from "hooks/useAppSelector";
import { fetchTodos } from "stores/actions";
import useAppDispatch from "hooks/useAppDispatch";

const App: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const count = useAppSelector((store) => Object.keys(store.todos).length);
  const dispatch = useAppDispatch();

  const onFetch = async () => {
    setLoading(true);
    try {
      await dispatch(fetchTodos());
    } catch (ex) {
      setError(ex as Error);
    }
    setLoading(false);
  };

  if (loading) return <div className={styles.loader} />;

  if (error) return <b>{error}</b>;

  return (
    <div>
      <h1>Todos: {count}</h1>
      <button onClick={onFetch}>Fetch todos</button>
    </div>
  );
};

export default App;
