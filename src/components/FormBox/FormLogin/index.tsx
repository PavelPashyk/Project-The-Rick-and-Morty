import { useNavigate } from "react-router-dom";
import { Button } from "../../PageElementsBox/Button";
import { ContainerForm } from "../../PageElementsBox/ContainerForm";
import { Input } from "../../PageElementsBox/Input";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import { FormText } from "../FormText";
import { FormTitle } from "../FormTitle";
import styles from "./style.module.css";

export const FormLogin = () => {
  const navigate = useNavigate();
  const navigateToRegistration = () => {
    navigate("/registration");
  };
  return (
    <Wrapper classNameWrapper={styles.form__box}>
      <ContainerForm>
        <FormTitle />
        <div className={styles.form__block}>
          <form className={styles.form__blockInner}>
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
              placeholder={"Confirm a password"}
              inputSvg={"password"}
              classNameInput={styles.inputStyle}
            />
            <Button
              text={"Login"}
              type={"button"}
              typeStyles={"btnForm"}
              onClickBtn={() => {}}
            />
          </form>
        </div>
        <FormText
          text={"Don't have an account? "}
          onClickToPage={navigateToRegistration}
          textLink={"Signup now"}
        />
      </ContainerForm>
    </Wrapper>
  );
};
