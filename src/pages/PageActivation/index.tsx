import { useContext } from "react";
import { ContextAll } from "../../App";
import { FormActivation } from "../../components/FormBox/FormActivation";
import { Header } from "../../components/HeaderBox/Header";
import { ContainerBack } from "../../components/PageElementsBox/ContainerBack";
import styles from "./style.module.css";

export const PageActivation = () => {
  const { isThema, setIsThema } = useContext(ContextAll);

  return (
    <ContainerBack
      stylesBackGround={`${isThema ? "bgFormNight" : "bgFormDay"}`}
    >
      <Header />
      <FormActivation />
    </ContainerBack>
  );
};
