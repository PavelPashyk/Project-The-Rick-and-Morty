import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPropsCharacterItem } from "../../../types/character";
import { ListCharacters } from "../ListCharacters";
import styles from "./style.module.css";

export const BlockCharacters = () => {
  const [personages, setPersonages] = useState<IPropsCharacterItem[]>([]);
  const navigate = useNavigate();
  const navigateToFullPost = (id: number | undefined) => {
    navigate(`/page_full_post/${id}`);
  };

  const [counter, setCounter] = useState(1);

  const onClickNextPage = () => {
    setCounter(counter + 1);
  };
  const onClickBackPage = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    const promise = fetch(
      `https://rickandmortyapi.com/api/character/?page=${counter}`
    );
    promise
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((values) => {
        console.log(values.results);
        setPersonages(values.results);
      });
  }, [counter]);

  return (
    <>
      <ListCharacters
        personagesArray={personages}
        onClickPerson={navigateToFullPost}
        onClickBack={onClickBackPage}
        onClickNext={onClickNextPage}
        disabledBack={counter === 1 ? true : false}
        disabledNext={counter === 42 ? true : false}
        count={counter}
      />
    </>
  );
};
