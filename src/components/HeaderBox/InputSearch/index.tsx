import { useContext } from "react";
import { ContextThema } from "../../../App";
import { Input } from "../../PageElementsBox/Input";
import styles from "./style.module.css";

export const InputSearch = () => {
  const { isThema, setIsThema } = useContext(ContextThema);

  return (
    <div className={styles.search__block}>
      <Input
        classNameInput={
          isThema ? styles.search__textNight : styles.search__textDay
        }
        type={"text"}
        placeholder={"SEARCH"}
        maxlength={40}
        onChangeInput={() => {}}
        // value={""}
      />
      <div className={styles.search__btn}>
        <div className={styles.search__icon}></div>
      </div>
    </div>
  );
};
