import { ReactNode } from "react";
import styles from "./style.module.css";

interface IPropsWrapper {
  children: ReactNode;
  classNameWrapper?: string;
}

export const Wrapper = ({ children, classNameWrapper }: IPropsWrapper) => {
  return (
    <div className={`${styles.wrapper} ${classNameWrapper}`}>{children}</div>
  );
};
