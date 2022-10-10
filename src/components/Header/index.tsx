import { createContext, useState } from "react";
import { Burger } from "../Burger";
import { InputSearch } from "../InputSearch";
import { NavBar } from "../NavBar";
import { Wrapper } from "../Wrapper";
import styles from "./style.module.css";

export const ContextBurger = createContext<{
  isNavBarVisible: boolean;
  setIsNavBarVisible: (value: boolean) => void;
}>({
  isNavBarVisible: false,
  setIsNavBarVisible: () => {},
});

export const Header = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  return (
    <ContextBurger.Provider
      value={{
        isNavBarVisible: isNavBarVisible,
        setIsNavBarVisible: setIsNavBarVisible,
      }}
    >
      <div className={styles.headereDay}>
        <Wrapper classNameWrapper={styles.headere__box}>
          <div className={styles.headere__menuDay}>
            <Burger />
            <h3 className={styles.headere__title}>*пока просто текст*</h3>
          </div>
          <InputSearch />
        </Wrapper>
      </div>
      <NavBar />
    </ContextBurger.Provider>
  );
};
