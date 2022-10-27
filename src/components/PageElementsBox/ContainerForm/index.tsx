import { ReactNode, useContext } from "react";
import { ContextThema } from "../../../App";
import styles from "./style.module.css";

interface IPropsConteinerForm {
  children: ReactNode;
}

export const ContainerForm = ({ children }: IPropsConteinerForm) => {
  const { isThema, setIsThema } = useContext(ContextThema);

  return (
    <div className={isThema ? styles.form__blockNight : styles.form__blockDay}>
      {children}
    </div>
  );
};
