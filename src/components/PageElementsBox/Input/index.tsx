import styles from "./style.module.css";
import { ChangeEventHandler } from "react";

interface IPropsInput {
  value?: string | number;
  placeholder?: string;
  maxlength?: number;
  type: string;
  name?: string;
  classNameInput?: string;
  onChangeInput?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  value,
  placeholder,
  maxlength,
  type,
  name,
  classNameInput,
  onChangeInput,
}: IPropsInput) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      maxLength={maxlength}
      minLength={0}
      type={type}
      name={name}
      className={`${classNameInput} ${styles.inputStyle}`}
      onChange={onChangeInput}
    />
  );
};
