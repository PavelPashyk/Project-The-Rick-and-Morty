import styles from "./style.module.css";

type btnStyles = "btnForm" | "btnStart" | "btnClick" | "btnReserve";

interface IPropsBtn {
  text: string;
  autofocus?: boolean;
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  typeStyles: btnStyles;
  classNameBtn?: string;
  onClickBtn: () => void;
}

const getStylesBtn = (typeStyles: btnStyles) => {
  if (typeStyles === "btnForm") {
    return styles.btnForm;
  } else if (typeStyles === "btnStart") {
    return styles.btnStart;
  } else if (typeStyles === "btnClick") {
    return styles.btnClick;
  } else {
    return styles.btnReserve;
  }
};

export const Button = ({
  text,
  autofocus,
  disabled,
  type,
  typeStyles,
  classNameBtn,
  onClickBtn,
}: IPropsBtn) => {
  return (
    <button
      autoFocus={autofocus}
      disabled={disabled}
      type={type}
      className={`${classNameBtn} ${getStylesBtn(typeStyles)}`}
      onClick={onClickBtn}
    >
      {text}
    </button>
  );
};
