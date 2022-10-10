import { ReactNode } from "react";
import styles from "./style.module.css";

type backGroundStyles = "bgFirst" | "bgAllDay" | "bgAllNight" | "bgForm" | "bgFinish";

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
    return styles.bgAllnight;
  } else if (stylesBackGround === "bgForm") {
    return styles.bgForm;
  } else if (stylesBackGround === "bgFinish") {
    return styles.bgFinish;
  }
};

export const ContainerBack = ({
  children,
  stylesBackGround,
}: IPropsConteinerBack) => {
  return (
    <div className={getBackGroundStyles(stylesBackGround)}>
      {children}
    </div>
  );
};
