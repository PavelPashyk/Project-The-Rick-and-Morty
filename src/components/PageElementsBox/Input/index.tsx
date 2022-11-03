import styles from "./style.module.css";
import { ChangeEventHandler, useContext } from "react";
import { Svg } from "../Svg";
import { ContextAll } from "../../../App";

  interface IPropsInput {
  value?: string | number;
  placeholder?: string;
  maxlength?: number;
  type: string;
  name?: string;
  classNameInput?: string;
  onChangeInput?: ChangeEventHandler<HTMLInputElement>;
  inputSvg?: string;
  /** */
  ref?: any;
  /** */
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
  /** */
  ref,
  /** */
}: IPropsInput) => {
  const { isThema, setIsThema } = useContext(ContextAll);

  return (
    <div className={`${isThema ? styles.inputBlockNight : styles.inputBlockDay}`} >
      <input
        value={value}
        placeholder={placeholder}
        maxLength={maxlength}
        minLength={0}
        type={type}
        name={name}
        className={`${classNameInput}`}
        onChange={onChangeInput}
        /** */
        ref={ref}
        /** */
      />
      <Svg id={`${inputSvg}`} />
    </div>
  );
};
