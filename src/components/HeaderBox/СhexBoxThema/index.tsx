import { useContext, useEffect } from "react";
import { ContextAll } from "../../../App";
import styles from "./style.module.css";

export const ChexBoxThema = () => {
  const { isThema, setIsThema } = useContext(ContextAll);

  const toggleThema = () => {
    if (isThema) {
      setIsThema(false);
    } else {
      setIsThema(true);
    }
  };

  return (
    <label className={styles.chexbox__switch}>
      <input
        className={styles.chexbox__input}
        type="checkbox"
        onChange={toggleThema}
      />
      <div
        className={`${
          isThema ? styles.chexbox__sliderNight : styles.chexbox__sliderDay
        }`}
      ></div>
    </label>
  );
};
