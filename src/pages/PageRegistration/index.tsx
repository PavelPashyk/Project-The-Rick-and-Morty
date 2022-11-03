import { useContext } from "react";
import { ContextAll } from "../../App";
import { FormRegistration } from "../../components/FormBox/FormRegistration";
import { Header } from "../../components/HeaderBox/Header";
import { ContainerBack } from "../../components/PageElementsBox/ContainerBack";
import styles from "./style.module.css";

export const PageRegistration = () => {
  const { isThema, setIsThema } = useContext(ContextAll);

  return (
    <ContainerBack
      stylesBackGround={`${isThema ? "bgFormNight" : "bgFormDay"}`}
    >
      <Header />
      <FormRegistration />
    </ContainerBack>
  );
};
