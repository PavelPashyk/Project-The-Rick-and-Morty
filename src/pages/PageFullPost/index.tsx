import { useContext } from "react";
import { ContextAll } from "../../App";
import { ItemCharacterFullPost } from "../../components/СharactersBox/ItemCharacterFullPost";
import { Header } from "../../components/HeaderBox/Header";
import { ContainerBack } from "../../components/PageElementsBox/ContainerBack";
import styles from "./style.module.css";

export const PageFullPost = () => {
  const { isThema, setIsThema } = useContext(ContextAll);
  return (
    <ContainerBack stylesBackGround={`${isThema ? "bgAllNight" : "bgAllDay"}`}>
      <Header />
      <ItemCharacterFullPost />
    </ContainerBack>
  );
};
