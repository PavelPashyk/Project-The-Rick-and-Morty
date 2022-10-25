import { useEffect, useState } from "react";
import { IPropsCharacterItem } from "../../../types/character";
import { Button } from "../../PageElementsBox/Button";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import { ItemCharacter } from "../ItemCharacter";
import styles from "./style.module.css";

interface IPropsCharactersList {
  personagesArray: IPropsCharacterItem[];
  onClickPerson: (id: number | undefined) => void;
  onClickBack: () => void;
  onClickNext: () => void;
  disabledBack: boolean;
  disabledNext: boolean;
  count: number;
}

export const ListCharacters = ({
  personagesArray,
  onClickPerson,
  onClickBack,
  onClickNext,
  disabledBack,
  disabledNext,
  count,
}: IPropsCharactersList) => {
  return (
    <Wrapper classNameWrapper={styles.characterList__box}>
      <div className={styles.characterList__boxInner}>
        {personagesArray.map((element) => {
          const clickPersonId = () => {
            onClickPerson(element.id);
          };
          return (
            <ItemCharacter
              id={element.id}
              name={element.name}
              image={element.image}
              status={element.status}
              species={element.species}
              onClickCharacter={clickPersonId}
            />
          );
        })}
      </div>
      <div className={styles.characterList__boxBtn}>
        <Button
          text={"Back"}
          type={"button"}
          typeStyles={"btnClick"}
          onClickBtn={onClickBack}
          disabled={disabledBack}
        />
        <p className={styles.characterList__count}>{count}</p>
        <Button
          text={"Next"}
          type={"button"}
          typeStyles={"btnClick"}
          onClickBtn={onClickNext}
          disabled={disabledNext}
        />
      </div>
    </Wrapper>
  );
};
