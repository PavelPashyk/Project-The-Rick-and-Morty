import { useContext } from "react";
import { ContextBurger } from "../Header";
import { MenuNavBar } from "../MenuNavBar";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import { ChexBoxThema } from "../–°hexBoxThema";
import styles from "./style.module.css";
import { ContextAll } from "../../../App";

export const NavBar = () => {
  const { isNavBarVisible, setIsNavBarVisible } = useContext(ContextBurger);
  const { isThema, setIsThema } = useContext(ContextAll);

  const getNavBarThema = () => {
    if (isThema) {
      return isNavBarVisible ? styles.navBarActivNight : styles.navBar;
    } else {
      return isNavBarVisible ? styles.navBarActivDay : styles.navBar;
    }
  };

  return (
    <div className={`${getNavBarThema()}`}>
      <Wrapper classNameWrapper={styles.navBar__box}>
        <MenuNavBar />
        <div className={styles.navBar__checkThema}>
          <ChexBoxThema />
        </div>
      </Wrapper>
    </div>
  );
};
