import { useNavigate } from "react-router-dom";
import { ContainerForm } from "../../PageElementsBox/ContainerForm";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import { FormText } from "../FormText";
import styles from "./style.module.css";

export const FormSuccess = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/main");
  };

  return (
    <Wrapper classNameWrapper={styles.form__box}>
      <ContainerForm>
        <div className={styles.form__block}>
          <h2 className={styles.form__title}>
            Please activate your account with the activation link in the email
          </h2>
          <FormText
            text={"Go to home page: "}
            onClickToPage={navigateToHome}
            textLink={"click here"}
          />
        </div>
      </ContainerForm>
    </Wrapper>
  );
};
