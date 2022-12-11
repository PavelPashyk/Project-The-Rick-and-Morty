import { useContext } from "react";
import { ContextAll } from "../../App";
import { Header } from "../../components/HeaderBox/Header";
import { ContainerBack } from "../../components/PageElementsBox/ContainerBack";
import { FavoritesBlock } from "../../components/СharactersBox/FavoritesBlock";
import styles from "./style.module.css";

export const PageMyPost = () => {
  const { isThema, setIsThema } = useContext(ContextAll);
  return (
    <ContainerBack stylesBackGround={`${isThema ? "bgAllNight" : "bgAllDay"}`}>
      <Header />
      <FavoritesBlock />
    </ContainerBack>
  );
};
