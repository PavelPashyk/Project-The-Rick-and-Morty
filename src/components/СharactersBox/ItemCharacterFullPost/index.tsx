/*набросок */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextAll } from "../../../App";
import { error_image, loading, no_image } from "../../../assets/images";
import {
  IPropsCharacterItem,
  IPropsLocationItem,
} from "../../../types/character";
import { Button } from "../../PageElementsBox/Button";
import { LoadingBlock } from "../../PageElementsBox/LoadingBlock";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import styles from "./style.module.css";

export const ItemCharacterFullPost = () => {
  const { isThema, setIsThema, isLoadingBlock, setIsLoadingBlock } =
    useContext(ContextAll);
  const paramsPersona = useParams();
  const [persona, setPersona] = useState<IPropsCharacterItem | null>(null);
  const [placeFirstUrl, setPlaceFirstUrl] = useState<IPropsLocationItem | null>(
    null
  );
  const [placeLastUrl, setPlaceLastUrl] = useState<IPropsLocationItem | null>(
    null
  );

  useEffect(() => {
    setIsLoadingBlock(true);
    const promise = fetch(
      `https://rickandmortyapi.com/api/character/${paramsPersona.personId}`
    );
    promise
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        setPersona(value);
      })
      .finally(() => {
        setIsLoadingBlock(false);
      });
  }, []);

  useEffect(() => {
    const promise = fetch(`${persona?.origin?.url}`);
    promise
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        setPlaceFirstUrl(value);
      });
  }, [persona?.origin?.url]);

  useEffect(() => {
    const promise = fetch(`${persona?.location?.url}`);
    promise
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        setPlaceLastUrl(value);
      });
  }, [persona?.location?.url]);

  const navigate = useNavigate();
  const navigateToBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper classNameWrapper={styles.fullPost__box}>
      {isLoadingBlock ? (
        <LoadingBlock />
      ) : (
        <>
          {persona ? (
            <div
              className={
                isThema
                  ? styles.fullPost__blockItemNight
                  : styles.fullPost__blockItemDay
              }
            >
              <img
                className={styles.fullPost__img}
                src={persona.image ? persona.image : `${no_image}`}
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
                  {persona.type ? persona.type : "data is being specified"}
                </p>
                <p>
                  <span>Gender: </span>
                  {persona.gender}
                </p>
              </div>
              <div className={styles.fullPost__firstSeen}>
                <h3>First seen in</h3>
                <p>
                  <span>Dimension: </span>
                  {placeFirstUrl?.dimension
                    ? placeFirstUrl?.dimension
                    : "data is being specified"}
                </p>
                <p>
                  <span>Place of appearance: </span>
                  {persona.origin?.name
                    ? persona.origin?.name
                    : "data is being specified"}
                </p>
                <p>
                  <span>First appearance: </span>
                  {placeFirstUrl?.name
                    ? placeFirstUrl?.name
                    : "data is being specified"}
                </p>
              </div>
              <div className={styles.fullPost__lastSeen}>
                <h3>Last seen in</h3>
                <p>
                  <span>Dimension: </span>
                  {placeLastUrl?.dimension
                    ? placeLastUrl?.dimension
                    : "data is being specified"}
                </p>
                <p>
                  <span>Place of appearance: </span>
                  {persona.location?.name
                    ? persona.location?.name
                    : "data is being specified"}
                </p>
                <p>
                  <span>Last appearance: </span>
                  {placeLastUrl?.name
                    ? placeLastUrl?.name
                    : "data is being specified"}
                </p>
              </div>
              <div className={styles.fullPost__appeared}>
                <h3>Appeared in</h3>
                <ul className={styles.fullPost__list}>
                  {persona.episode?.map((item) => {
                    return (
                      <li
                        className={
                          isThema
                            ? styles.fullPost__itemNight
                            : styles.fullPost__itemDay
                        }
                      >
                        Episode: {item.replace(/[^0-9]/g, "")}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <img
              className={styles.fullPost__errorBlock}
              src={error_image}
              alt="error-image"
            />
          )}
          <Button
            text={"Back"}
            type={"button"}
            typeStyles={"btnFullPost"}
            onClickBtn={navigateToBack}
          />
        </>
      )}
    </Wrapper>
  );
};
