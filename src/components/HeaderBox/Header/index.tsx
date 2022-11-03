import { createContext, useContext, useState } from "react";
import { Burger } from "../Burger";
import { InputSearch } from "../InputSearch";
import { NavBar } from "../NavBar";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import styles from "./style.module.css";
import { ContextAll } from "../../../App";
import { Svg } from "../../PageElementsBox/Svg";
import { useNavigate } from "react-router-dom";

export const ContextBurger = createContext<{
  isNavBarVisible: boolean;
  setIsNavBarVisible: (value: boolean) => void;
}>({
  isNavBarVisible: false,
  setIsNavBarVisible: () => {},
});

export const Header = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const { isThema, setIsThema, user, setUser } = useContext(ContextAll);
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/login");
    setUser(null);
    localStorage.clear();
  };

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
            <h3 className={styles.headere__title}>{user?.username}</h3>
            {user ? (
              <a href="" onClick={logOut}>
                <Svg id={"exit"} />
              </a>
            ) : null}
          </div>
          <InputSearch />
        </Wrapper>
      </div>
      <NavBar />
    </ContextBurger.Provider>
  );
};
