import { useContext } from "react";
import { ContextBurger } from "../Header";
import { MenuNavBar } from "../MenuNavBar";
import { Wrapper } from "../Wrapper";
import { ChexBoxThema } from "../СhexBoxThema";
import styles from "./style.module.css";

export const NavBar = () => {
  const { isNavBarVisible, setIsNavBarVisible } = useContext(ContextBurger);

  return (
    <div className={isNavBarVisible ? styles.navBarActivDay : styles.navBar}>
      <Wrapper classNameWrapper={styles.navBar__box}>
        <MenuNavBar />
        <div className={styles.navBar__checkThema}>
          <ChexBoxThema />
        </div>
      </Wrapper>
    </div>
  );
};
