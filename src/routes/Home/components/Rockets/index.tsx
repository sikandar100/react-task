import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Listing from "components/Listing";
import { getRockets } from "stores/actions";
import useAppSelector from "hooks/useAppSelector";
import useAppDispatch from "hooks/useAppDispatch";

import styles from "../../styles.module.css";

const Rockets: FC = () => {
  const [loading, setLoading] = useState(false);

  const allRockets = useAppSelector((store) => Object.values(store.rockets));

  console.debug(allRockets)
  const dispatch = useAppDispatch();

  const handleLoadMore = async (offset: number, limit: number) => {
    setLoading(true);
    await dispatch(getRockets(offset, limit));
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(getRockets());
      setLoading(false);
    })();
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Latest Rockets!</h1>
      {loading && !allRockets.length ? (
        <div className="loader" />
      ) : (
        <Listing loading={loading} onLoadMore={handleLoadMore}>
          {allRockets.map((rocket) => (
            <Link to={`/rockets/${rocket.rocket_id}`} className={styles.launch}>
              {rocket.flickr_images[0] ? (
                <img
                  className={styles.launchImage}
                  src={rocket.flickr_images[0]}
                  alt=""
                />
              ) : (
                <div className={styles.noImage}>No Image Available</div>
              )}
              <div className={styles.launchInformation}>
                <h2 className={styles.launchTitle}>{rocket.rocket_name}</h2>
              </div>
            </Link>
          ))}
        </Listing>
      )}
    </div>
  );
};

export default Rockets;
