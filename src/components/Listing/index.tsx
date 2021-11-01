import { FC, useRef } from "react";

import styles from "./styles.module.css";

interface IListingProps {
  loading: boolean;
  onLoadMore: (offset: number, limit: number) => void;
}

const limit = 10;

const Listing: FC<IListingProps> = ({ children, onLoadMore, loading }) => {
  const currentPageRef = useRef(0);

  const handleClick = () => {
    currentPageRef.current += 1;
    onLoadMore(currentPageRef.current * limit, limit);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>{children}</div>
      <button onClick={handleClick} className="btn">
        {loading && <div className="loader loader--sm" />}
        Load More
      </button>
    </div>
  );
};

export default Listing;
