import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextAll } from "../../../App";
import { ContextSearch } from "../../../pages/Main";
import { IPropsCharacterItem } from "../../../types/character";
import { ListCharacters } from "../ListCharacters";
import styles from "./style.module.css";

export const BlockCharacters = () => {
  const [personages, setPersonages] = useState<IPropsCharacterItem[]>([]);
  const { isLoadingBlock, setIsLoadingBlock } = useContext(ContextAll);
  const [counter, setCounter] = useState(1);
  let [numberPage, setNumberPage] = useState(1);
  const { searchText, setSearchText } = useContext(ContextSearch);

  const navigate = useNavigate();
  const navigateToFullPost = (id: number | undefined) => {
    navigate(`/page_full_post/${id}`);
  };

  const onClickNextPage = () => {
    setCounter(counter + 1);
  };
  const onClickBackPage = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    setIsLoadingBlock(true);
    const promise = fetch(
      `https://rickandmortyapi.com/api/character/?page=${counter}&name=${searchText}`
    );
    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setNumberPage((numberPage = values.info.pages));
        setPersonages(values.results);
      })
      .finally(() => {
        setIsLoadingBlock(false);
      });
  }, [counter, searchText]);

  return (
    <>
      <ListCharacters
        personagesArray={personages}
        onClickPerson={navigateToFullPost}
        onClickBack={onClickBackPage}
        onClickNext={onClickNextPage}
        disabledBack={counter === 1 ? true : false}
        disabledNext={counter === numberPage ? true : false}
        count={counter}
      />
    </>
  );
};
