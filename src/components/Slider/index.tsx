import { FC, useState } from "react";

import styles from "./styles.module.css";

interface ISliderProps {
  images: string[];
}

const Slider: FC<ISliderProps> = ({ images }) => {
  const [currentlyViewing, setCurrentlyViewing] = useState(0);
  return (
    <div className={styles.wrapper}>
      <img
        src={images[currentlyViewing]}
        className={styles.currentlyViewing}
        alt=""
      />
      <div className={styles.allImagesWrapper}>
        {images.map((img, index) => (
          <img src={img} alt={img} onClick={() => setCurrentlyViewing(index)} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
