import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import dayjs from "dayjs";

import Slider from "components/Slider";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { getRocket } from "stores/actions";

interface IRouteParams {
  rocketId: string;
}

const Rocket: FC = () => {
  const { rocketId } = useParams() as IRouteParams;

  const dispatch = useAppDispatch();
  const rocket = useAppSelector((store) => store.rockets[rocketId]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(getRocket(rocketId));
      setLoading(false);
    })();
  }, [dispatch, rocketId]);

  if (loading || !rocket)
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
      <h5>First Flight: {dayjs(rocket.first_flight).format("dddd DD MMM, YYYY hh:mm A")}</h5>
      <h1>{rocket.rocket_name}</h1>
      <Slider images={rocket.flickr_images} />
      <br />
      <h5>Details About the Mission:</h5>
      <p className={styles.details}>{rocket.description}</p>
    </div>
  );
};

export default Rocket;
