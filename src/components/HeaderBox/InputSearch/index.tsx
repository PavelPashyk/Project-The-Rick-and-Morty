import { ChangeEventHandler, useContext, useState } from "react";
import { ContextAll } from "../../../App";
import { ContextSearch } from "../../../pages/Main";
import { Input } from "../../PageElementsBox/Input";
import styles from "./style.module.css";

export const InputSearch = () => {
  const { isThema, setIsThema } = useContext(ContextAll);
  const {searchText, setSearchText} = useContext(ContextSearch);

  const handleSearchText: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value)
  };

  return (
    <div className={styles.search__block}>
      <input
        className={isThema ? styles.search__textNight : styles.search__textDay}
        type={"text"}
        placeholder={"SEARCH"}
        maxLength={40}
        onChange={handleSearchText}
        value={searchText} />
      <div className={styles.search__btn}>
        <div className={styles.search__icon}></div>
      </div>
    </div>
  );
};
