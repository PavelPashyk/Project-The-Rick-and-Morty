import { useContext } from "react";
import { ContextAll } from "../../App";
import { FormSuccess } from "../../components/FormBox/FormSuccess";
import { Header } from "../../components/HeaderBox/Header";
import { ContainerBack } from "../../components/PageElementsBox/ContainerBack";
import styles from "./style.module.css";

export const PageSuccess = () => {
  const { isThema, setIsThema } = useContext(ContextAll);

  return (
    <ContainerBack
      stylesBackGround={`${isThema ? "bgFormNight" : "bgFormDay"}`}
    >
      <Header />
      <FormSuccess />
    </ContainerBack>
  );
};
