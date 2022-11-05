import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { activateUser } from "../../../api/auth";
import { ContainerForm } from "../../PageElementsBox/ContainerForm";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import { FormText } from "../FormText";
import styles from "./style.module.css";

export const FormActivation = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/login");
  };

  const params = useParams();

  useEffect(() => {
    if (params.uid && params.token) {
      activateUser(params.uid, params.token);
    }
  }, []);

  return (
    <Wrapper classNameWrapper={styles.form__box}>
      <ContainerForm>
        <div className={styles.form__block}>
          <h2 className={styles.form__title}>Activation was successful</h2>
          <FormText
            text={"Now you can login: "}
            onClickToPage={navigateToHome}
            textLink={"click here"}
          />
        </div>
      </ContainerForm>
    </Wrapper>
  );
};
