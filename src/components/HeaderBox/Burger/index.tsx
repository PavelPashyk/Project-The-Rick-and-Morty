import { useContext, useState } from "react";
import { ContextAll } from "../../../App";
import { ContextBurger } from "../Header";
import styles from "./style.module.css";

export const Burger = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const { isNavBarVisible, setIsNavBarVisible } = useContext(ContextBurger);
  const { isThema, setIsThema } = useContext(ContextAll);

  const toggleActiveBurger = () => {
    if (activeBurger === false && isNavBarVisible === false) {
      setActiveBurger(true);
      setIsNavBarVisible(true);
    } else {
      setActiveBurger(false);
      setIsNavBarVisible(false);
    }
  };

  return (
    <div
      className={`${styles.burger__block}  ${
        activeBurger ? styles.active__burger : null
      }`}
      onClick={toggleActiveBurger}
    >
      <div
        className={`${
          isThema ? styles.burger__menuNight : styles.burger__menuDay
        }`}
      ></div>
    </div>
  );
};
