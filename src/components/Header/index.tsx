import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Header: FC = () => (
  <div className={styles.header}>
    <h1>SpaceX API</h1>
    <nav>
      <Link to="/home">Home</Link>
    </nav>
  </div>
);
export default Header;
