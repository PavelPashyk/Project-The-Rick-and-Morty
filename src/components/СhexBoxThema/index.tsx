import { Input } from "../Input";
import styles from "./style.module.css";

export const ChexBoxThema = () => {
  return (
    <>
      <label className={styles.chexbox__switch}>
        <Input classNameInput={styles.chexbox__input} type="checkbox" />
        <div className={styles.chexbox__sliderDay}></div>
      </label>
    </>
  );
};
