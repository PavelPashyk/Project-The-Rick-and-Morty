import styles from "./style.module.css";
import { ChangeEventHandler } from "react";

interface IPropsInput {
  value?: string | number;
  placeholder?: string;
  maxlength?: number;
  minlength?: number;
  type: string;
  name?: string;
  classNameInput?: string;
  onChangeInput?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  value,
  placeholder,
  maxlength,
  minlength,
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
      minLength={minlength}
      type={type}
      name={name}
      className={`${classNameInput} ${styles.inputStyle}`}
      onChange={onChangeInput}
    />
  );
};
