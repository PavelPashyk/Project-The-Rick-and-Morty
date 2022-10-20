import { ListCharacters } from "../../components/СharactersBox/ListCharacters";
import { ContainerBack } from "../../components/PageElementsBox/ContainerBack";
import { Header } from "../../components/HeaderBox/Header";
import { charactersArrayTest } from "../../mocks/charactersArrayTest";
import styles from "./style.module.css";
import { BlockCharacters } from "../../components/СharactersBox/BlockCharacters";
import { ContextThema } from "../../App";
import { useContext } from "react";

export const Main = () => {
  const { isThema, setIsThema } = useContext(ContextThema);

  return (
    <ContainerBack stylesBackGround={`${isThema ? "bgAllNight" : "bgAllDay"}`}>
      <Header />
      <BlockCharacters />
    </ContainerBack>
  );
};
