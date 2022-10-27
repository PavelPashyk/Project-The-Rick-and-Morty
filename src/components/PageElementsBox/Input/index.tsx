import styles from "./style.module.css";
import { ChangeEventHandler } from "react";
import { Svg } from "../Svg";

interface IPropsInput {
  value?: string | number;
  placeholder?: string;
  maxlength?: number;
  type: string;
  name?: string;
  classNameInput?: string;
  onChangeInput?: ChangeEventHandler<HTMLInputElement>;
  inputSvg?: string;
}

export const Input = ({
  value,
  placeholder,
  maxlength,
  type,
  name,
  classNameInput,
  onChangeInput,
  inputSvg,
}: IPropsInput) => {
  return (
    <div className={styles.inputBlock}>
      <input
        value={value}
        placeholder={placeholder}
        maxLength={maxlength}
        minLength={0}
        type={type}
        name={name}
        className={`${classNameInput}`}
        onChange={onChangeInput}
      />
      <Svg id={`${inputSvg}`} />
    </div>
  );
};
