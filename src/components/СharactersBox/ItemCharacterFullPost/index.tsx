/*набросок */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextThema } from "../../../App";
import { IPropsCharacterItem } from "../../../types/character";
import { Button } from "../../PageElementsBox/Button";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import styles from "./style.module.css";

export const ItemCharacterFullPost = () => {
  const { isThema, setIsThema } = useContext(ContextThema);
  const params = useParams();
  const [persona, setPersona] = useState<IPropsCharacterItem | null>(null);

  useEffect(() => {
    const promise = fetch(
      `https://rickandmortyapi.com/api/character/${params.personId}`
    );
    promise
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        setPersona(value);
      });
  }, []);

  const navigate = useNavigate();
  const navigateToBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper classNameWrapper={styles.fullPost__box}>
      {persona ? (
        <div className={styles.fullPost__blockItem}>
          <img
            className={styles.fullPost__img}
            src={persona.image}
            alt={`Character image: ${persona.name}`}
          />
          <h2 className={styles.fullPost__name}>{persona.name}</h2>
          <div className={styles.fullPost__infoPersonage}>
            <p>
              <span>Status: </span>
              {persona.status}
            </p>
            <p>
              <span>Species: </span>
              {persona.species}
            </p>
            <p>
              <span>Type: </span>
              {persona.type}
            </p>
            <p>
              <span>Gender: </span>
              {persona.gender}
            </p>
          </div>
          <div className={styles.fullPost__firstSeen}>
            <h3>First seen in</h3>
            <p>
              <span>Place of appearance: </span>
              {persona.origin?.name}
            </p>
            <p>
              <span>First appearance: </span>
              {persona.origin?.url}
              {/*ПОТОМ*/}
            </p>
          </div>
          <div className={styles.fullPost__lastSeen}>
            <h3>Last seen in</h3>
            <p>
              <span>Place of appearance: </span>
              {persona.location?.name}
            </p>
            <p>
              <span>Last appearance: </span>
              {persona.location?.url}
              {/*ПОТОМ*/}
            </p>
          </div>
          <div className={styles.fullPost__appeared}>
            <h3>Appeared in</h3>
            <ul className={styles.fullPost__list}>
              {persona.episode?.map((item) => {
                return (
                  <li className={styles.fullPost__item}>
                    Episode: {item.replace(/[^0-9]/g, "")}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
      <Button
        text={"Back"}
        type={"button"}
        typeStyles={"btnFullPost"}
        onClickBtn={navigateToBack}
      />
    </Wrapper>
  );
};
