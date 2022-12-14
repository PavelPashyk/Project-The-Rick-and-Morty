import { useContext } from "react";
import { ContextAll } from "../../App";
import { FormLogin } from "../../components/FormBox/FormLogin";
import { Header } from "../../components/HeaderBox/Header";
import { ContainerBack } from "../../components/PageElementsBox/ContainerBack";
import styles from "./style.module.css";

export const PageLogin = () => {
  const { isThema, setIsThema } = useContext(ContextAll);

  return (
    <ContainerBack
      stylesBackGround={`${isThema ? "bgFormNight" : "bgFormDay"}`}
    >
      <Header />
      <FormLogin />
    </ContainerBack>
  );
};
