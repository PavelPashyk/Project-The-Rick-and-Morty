import { useContext } from "react";
import { ContextAll } from "../../../App";
import { no_image } from "../../../assets/images";
import { IPropsCharacterItem } from "../../../types/character";
import styles from "./style.module.css";

interface IPropsCharactersItem extends IPropsCharacterItem {
  onClickCharacter?: () => void;
}

export const ItemCharacter = ({
  name,
  status,
  species,
  image,
  onClickCharacter,
}: IPropsCharactersItem) => {
  const { isThema, setIsThema } = useContext(ContextAll);
  return (
    <div
      className={
        isThema
          ? styles.character__blockItemNight
          : styles.character__blockItemDay
      }
    >
      <img
        className={styles.character__img}
        src={image ? image : `${no_image}`}
        alt={`Character image: ${name}`}
        onClick={onClickCharacter}
      />
      <h2 className={styles.character__titleName}>{name}</h2>
      <div
        className={
          isThema
            ? styles.character__textBlockNight
            : styles.character__textBlockDay
        }
      >
        <p className={styles.character__text}>
          <span className={styles.character__title}>Status: </span>
          {status}
        </p>
        <p className={styles.character__text}>
          <span className={styles.character__title}>Species: </span>
          {species}
        </p>
      </div>
    </div>
  );
};
