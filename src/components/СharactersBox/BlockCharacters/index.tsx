import { useEffect, useState } from "react";
import { IPropsCharacterItem } from "../../../types/character";
import { ListCharacters } from "../ListCharacters";
import styles from "./style.module.css";

export const BlockCharacters = () => {
  const [personages, setPersonages] = useState<IPropsCharacterItem[]>([]);

  useEffect(() => {
    const promise = fetch("https://rickandmortyapi.com/api/character/?page=2");

    promise
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((values) => {
        console.log(values.results);
        setPersonages(values.results);
      });
  }, []);

  return (
    <>
      <ListCharacters personagesArray={personages} onClick={() => {}} />
    </>
  );
};
