import styles from "./styles.module.css";

import { FC, useEffect, useRef, useState } from "react";

import useAppDispatch from "hooks/useAppDispatch";
import { getLaunches, getRockets } from "stores/actions";
import useAppSelector from "hooks/useAppSelector";
import { sortBy } from "lodash";
import dayjs from "dayjs";

const App: FC = () => {
  const rockets = useAppSelector((store) => Object.keys(store.rockets).length);
  const launches = useAppSelector((store) => Object.values(store.launches));

  const dispatch = useAppDispatch();

  const currentPageRef = useRef(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        await dispatch(getRockets());
        await dispatch(getLaunches(currentPageRef.current * 10));
      } catch (ex) {
        setError(ex as Error);
      }
      setLoading(false);
    })();
  }, [dispatch]);

  const onLoadMore = async () => {
    setLoading(true);
    try {
      await dispatch(getLaunches((currentPageRef.current + 1) * 10));
      currentPageRef.current += 1;
    } catch (ex) {
      setError(ex as Error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>SpaceX-API</h1>
      {error && <div style={{ color: "red" }}>{error.message}</div>}
      <p>
        <b>Rockets</b>: {rockets}, <b>launches</b>: {launches.length}
      </p>
      <h2>Launches</h2>
      <div>
        {sortBy(launches, (launch) => dayjs(launch.launch_date_utc).valueOf())
          .reverse()
          .filter((launch) => !launch.upcoming)
          .map((launch) => (
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={launch.links.mission_patch_small}
                alt={launch.mission_name}
              />
              <h3>{launch.mission_name}</h3>
              <sub>
                {dayjs
                  .duration(dayjs().diff(dayjs(launch.launch_date_utc)))
                  .asMonths()}{" "}
                seconds ago
              </sub>
            </div>
          ))}
      </div>
      <button onClick={onLoadMore}>
        {loading && <div className={styles.loader} />}Load more launches
      </button>
    </div>
  );
};

export default App;
