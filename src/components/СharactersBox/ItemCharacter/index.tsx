import { useContext, useState } from "react";
import { ContextAll } from "../../../App";
import { no_image } from "../../../assets/images";
import { IPropsCharacterItem } from "../../../types/character";
import { Svg } from "../../PageElementsBox/Svg";
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
  const { isThema, setIsThema, user } = useContext(ContextAll);
  
  const [star, setStar] = useState(false);
  const toggleIsStar = () => {
    if (star) {
      setStar(false);
    } else {
      setStar(true);
    }
  };
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
      {!user ? null : (<div className={star ? styles.character__svgBlockActive : styles.character__svgBlock} onClick={toggleIsStar}>
        <Svg id={"star"} />
      </div>)}
    </div>
  );
};
