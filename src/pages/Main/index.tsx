import { ListCharacters } from "../../components/–°haractersBox/ListCharacters";
import { ContainerBack } from "../../components/PageElementsBox/ContainerBack";
import { Header } from "../../components/HeaderBox/Header";
import { charactersArrayTest } from "../../mocks/charactersArrayTest";
import styles from "./style.module.css";
import { BlockCharacters } from "../../components/–°haractersBox/BlockCharacters";
import { ContextAll } from "../../App";
import { createContext, useContext, useState } from "react";

  export const ContextSearch = createContext<{
    searchText: string;
    setSearchText: (value: string) => void;
  }>({
    searchText: "",
    setSearchText: () => {},
  });

export const Main = () => {
  const { isThema, setIsThema } = useContext(ContextAll);
  const [searchText, setSearchText] = useState("");
  
  return (
    <ContextSearch.Provider
      value={{
        searchText: searchText,
        setSearchText: setSearchText,
      }}
    >
    <ContainerBack stylesBackGround={`${isThema ? "bgAllNight" : "bgAllDay"}`}>
      <Header />
      <BlockCharacters />
    </ContainerBack>
    </ContextSearch.Provider>
    
  );
};
