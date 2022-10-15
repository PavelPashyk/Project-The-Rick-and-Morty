import { Input } from "../Input";
import styles from "./style.module.css";

export const InputSearch = () => {
  return (
    <div className={styles.search__block}>
      <Input
        classNameInput={styles.search__txtDay}
        type={"text"}
        placeholder={"SEARCH"}
        maxlength={40}
        minlength={0}
        onChangeInput={() => {}}
        // value={""}
      />
      <div className={styles.search__btn}>
        <div className={styles.search__icon}></div>
      </div>
    </div>
  );
};
