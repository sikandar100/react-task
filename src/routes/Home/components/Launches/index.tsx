import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sortBy } from "lodash";

import dayjs from "dayjs";

import Listing from "components/Listing";
import { getLaunches } from "stores/actions";
import useAppSelector from "hooks/useAppSelector";
import useAppDispatch from "hooks/useAppDispatch";

import styles from "../../styles.module.css";

const Launches: FC = () => {
  const [loading, setLoading] = useState(false);

  const allLaunches = useAppSelector((store) => store.launches);

  const dispatch = useAppDispatch();

  const launches = sortBy(
    Object.values(allLaunches),
    (launch) => -dayjs(launch.launch_date_utc).valueOf()
  ).filter((launch) => !launch.upcoming);

  const handleLoadMore = async (offset: number, limit: number) => {
    setLoading(true);
    await dispatch(getLaunches(offset, limit));
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(getLaunches());
      setLoading(false);
    })();
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Latest Launches!</h1>
      {loading && !launches.length ? (
        <div className="loader" />
      ) : (
        <Listing loading={loading} onLoadMore={handleLoadMore}>
          {launches.map((launch) => (
            <Link
              to={`/launches/${launch.flight_number}`}
              className={styles.launch}
            >
              {launch.links.flickr_images[0] ? (
                <img
                  className={styles.launchImage}
                  src={launch.links.flickr_images[0]}
                  alt=""
                />
              ) : (
                <div className={styles.noImage}>No Image Available</div>
              )}
              <div className={styles.launchInformation}>
                <span className={styles.launchDate}>{dayjs(launch.launch_date_utc).format("DD MMM, YYYY")}</span>
                <h2 className={styles.launchTitle}>{launch.mission_name}</h2>
              </div>
            </Link>
          ))}
        </Listing>
      )}
    </div>
  );
};

export default Launches;
