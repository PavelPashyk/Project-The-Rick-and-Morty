import { useContext } from "react";
import { ContextThema } from "../../../App";
import { IPropsCharacterItem } from "../../../types/character";
import styles from "./style.module.css";

export const ItemCharacter = ({
  name,
  status,
  species,
  image,
}: IPropsCharacterItem) => {
  const { isThema, setIsThema } = useContext(ContextThema);

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
        src={image}
        alt={`Character image: ${name}`}
        onClick={() => {}}
      />
      <h2 className={styles.character__titleName}>{name}</h2>
      <div className={styles.character__textBlock}>
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
