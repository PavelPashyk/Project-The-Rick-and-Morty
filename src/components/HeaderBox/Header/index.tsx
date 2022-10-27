import { createContext, useContext, useState } from "react";
import { Burger } from "../Burger";
import { InputSearch } from "../InputSearch";
import { NavBar } from "../NavBar";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import styles from "./style.module.css";
import { ContextThema } from "../../../App";

export const ContextBurger = createContext<{
  isNavBarVisible: boolean;
  setIsNavBarVisible: (value: boolean) => void;
}>({
  isNavBarVisible: false,
  setIsNavBarVisible: () => {},
});

export const Header = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const { isThema, setIsThema } = useContext(ContextThema);

  return (
    <ContextBurger.Provider
      value={{
        isNavBarVisible: isNavBarVisible,
        setIsNavBarVisible: setIsNavBarVisible,
      }}
    >
      <div className={`${isThema ? styles.headereNight : styles.headereDay}`}>
        <Wrapper classNameWrapper={styles.headere__box}>
          <div
            className={`${
              isThema ? styles.headere__menuNight : styles.headere__menuDay
            }`}
          >
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
