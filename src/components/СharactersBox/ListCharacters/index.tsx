import { useEffect, useState } from "react";
import { IPropsCharacterItem } from "../../../types/character";
import { Button } from "../../PageElementsBox/Button";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import { ItemCharacter } from "../ItemCharacter";
import styles from "./style.module.css";

interface IPropsCharactersList {
  personagesArray: IPropsCharacterItem[];
  onClick: () => void;
}

export const ListCharacters = ({ personagesArray }: IPropsCharactersList) => {
  return (
    <Wrapper classNameWrapper={styles.characterList__box}>
      <div className={styles.characterList__boxInner}>
        {personagesArray.map((element) => {
          return (
            <ItemCharacter
              id={element.id}
              name={element.name}
              image={element.image}
              status={element.status}
              species={element.species}
            />
          );
        })}
      </div>
      <Button
        text={"Next"}
        type={"button"}
        typeStyles={"btnClick"}
        onClickBtn={() => {}}
      />
    </Wrapper>
  );
};
