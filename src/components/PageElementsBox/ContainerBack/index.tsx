import { ReactNode } from "react";
import styles from "./style.module.css";

type backGroundStyles =
  | "bgFirst"
  | "bgAllDay"
  | "bgAllNight"
  | "bgFormDay"
  | "bgFormNight"
  | "bgFinish"
  | "bgNotFound";

interface IPropsConteinerBack {
  children: ReactNode;
  stylesBackGround: backGroundStyles;
}

const getBackGroundStyles = (stylesBackGround: backGroundStyles) => {
  if (stylesBackGround === "bgFirst") {
    return styles.bgFirst;
  } else if (stylesBackGround === "bgAllDay") {
    return styles.bgAllDay;
  } else if (stylesBackGround === "bgAllNight") {
    return styles.bgAllNight;
  } else if (stylesBackGround === "bgFormDay") {
    return styles.bgFormDay;
  } else if (stylesBackGround === "bgFormNight") {
    return styles.bgFormNight;
  } else if (stylesBackGround === "bgFinish") {
    return styles.bgFinish;
  } else if (stylesBackGround === "bgNotFound") {
    return styles.bgNotFound;
  }
};

export const ContainerBack = ({
  children,
  stylesBackGround,
}: IPropsConteinerBack) => {
  return (
    <div className={getBackGroundStyles(stylesBackGround)}>{children}</div>
  );
};
