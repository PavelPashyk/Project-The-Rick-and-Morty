import { useNavigate } from "react-router-dom";
import { Input } from "../../PageElementsBox/Input";
import { FormText } from "../FormText";
import { ContainerForm } from "../../PageElementsBox/ContainerForm";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import { FormTitle } from "../FormTitle";
import styles from "./style.module.css";
import { Button } from "../../PageElementsBox/Button";

export const FormRegistration = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <Wrapper classNameWrapper={styles.form__box}>
      <ContainerForm>
        <FormTitle />
        <div className={styles.form__block}>
          <form className={styles.form__blockInner}>
            <p className={styles.form__text}>Name</p>
            <Input
              type={"text"}
              onChangeInput={() => {}}
              placeholder={"Enter your name"}
              maxlength={20}
              inputSvg={"name"}
              classNameInput={styles.inputStyle}
            />
            <p className={styles.form__text}>Email</p>
            <Input
              type={"email"}
              onChangeInput={() => {}}
              placeholder={"Enter your email"}
              inputSvg={"email"}
              classNameInput={styles.inputStyle}
            />
            <p className={styles.form__text}>Password</p>
            <Input
              type={"password"}
              onChangeInput={() => {}}
              placeholder={"Create a password"}
              maxlength={20}
              inputSvg={"password"}
              classNameInput={styles.inputStyle}
            />
            <p className={styles.form__text}>Password</p>
            <Input
              type={"password"}
              onChangeInput={() => {}}
              placeholder={"Confirm a password"}
              maxlength={20}
              inputSvg={"password"}
              classNameInput={styles.inputStyle}
            />
            <Button
              text={"Register"}
              type={"button"}
              typeStyles={"btnForm"}
              onClickBtn={() => {}}
            />
          </form>
        </div>
        <FormText
          text={"Already have an account? "}
          onClickToPage={navigateToLogin}
          textLink={"Login now"}
        />
      </ContainerForm>
    </Wrapper>
  );
};
