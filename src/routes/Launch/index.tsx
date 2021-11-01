import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import dayjs from "dayjs";

import Slider from "components/Slider";
import { getLaunch } from "stores/actions";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

interface IRouteParams {
  launchId: string;
}

const Launch: FC = () => {
  const { launchId } = useParams() as IRouteParams;

  const dispatch = useAppDispatch();
  const launch = useAppSelector((store) => store.launches[launchId]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(getLaunch(launchId));
      setLoading(false);
    })();
  }, [dispatch, launchId]);

  if (loading || !launch)
    return (
      <div className="container">
        <div className="loader" />
      </div>
    );

  return (
    <div className="container">
      <h5>
        <Link to="/">Go Back</Link>
      </h5>
      <h5>
        {dayjs(launch.launch_date_utc).format("dddd DD MMM, YYYY hh:mm A")}
      </h5>
      <h1>{launch.mission_name}</h1>
      <Slider images={launch.links.flickr_images} />
      <br />
      <h5>Details About the Mission:</h5>
      <p className={styles.details}>{launch.details}</p>
    </div>
  );
};

export default Launch;
