import { useContext, useState } from "react";
import { ContextBurger } from "../Header";
import styles from "./style.module.css";

export const Burger = () => {
  const [activBurger, setActivBurger] = useState(false);
  const {isNavBarVisible, setIsNavBarVisible} = useContext(ContextBurger);

  const toggleActivBurger = () => {
    if (activBurger === false && isNavBarVisible === false) {
      setActivBurger(true);
      setIsNavBarVisible(true);
      console.log(activBurger, isNavBarVisible);
    } else {
      setActivBurger(false);
      setIsNavBarVisible(false);
      console.log(activBurger, isNavBarVisible);
    }
  };

  return (
    <div
      className={`${styles.burger__block}  ${
        activBurger ? styles.active__burger : null
      }`}
      onClick={toggleActivBurger}
    >
      <div className={styles.burger__menuDay}></div>
    </div>
  );
};
