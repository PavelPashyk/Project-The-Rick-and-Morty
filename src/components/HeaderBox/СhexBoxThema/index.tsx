import { useContext } from "react";
import { ContextThema } from "../../../App";
import { Input } from "../../PageElementsBox/Input";
import styles from "./style.module.css";

export const ChexBoxThema = () => {
  const { isThema, setIsThema } = useContext(ContextThema);

  const toggleThema = () => {
    if (isThema) {
      setIsThema(false);
    } else {
      setIsThema(true);
    }
  };

  return (
    <label className={styles.chexbox__switch}>
      <Input
        classNameInput={styles.chexbox__input}
        type="checkbox"
        onChangeInput={toggleThema}
      />
      <div
        className={`${
          isThema ? styles.chexbox__sliderNight : styles.chexbox__sliderDay
        }`}
      ></div>
    </label>
  );
};
