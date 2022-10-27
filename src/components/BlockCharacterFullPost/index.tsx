/*набросок */

import { IPropsCharacterItem } from "../../types/character";
import { Wrapper } from "../PageElementsBox/Wrapper";
import styles from "./style.module.css";

export const BlockCharacterFullPost = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
}: IPropsCharacterItem) => {
  const arrayTest = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "---",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/37",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41",
      "https://rickandmortyapi.com/api/episode/42",
      "https://rickandmortyapi.com/api/episode/43",
      "https://rickandmortyapi.com/api/episode/44",
      "https://rickandmortyapi.com/api/episode/45",
      "https://rickandmortyapi.com/api/episode/46",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/50",
      "https://rickandmortyapi.com/api/episode/51",
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  };

  return (
    <Wrapper classNameWrapper={styles.fullPost__box}>
      <div className={styles.fullPost__blockItem}>
        <img src={arrayTest.image} alt={`Character image: ${arrayTest.name}`} />
        <h2>
          <span>{arrayTest.name}</span>
        </h2>
        <p>
          <span>Status: </span>
          {arrayTest.status}
        </p>
        <p>
          <span>Species: </span>
          {arrayTest.species}
        </p>
        <p>
          <span>Type: </span>
          {arrayTest.type}
        </p>
        <p>
          <span>Gender: </span>
          {arrayTest.gender}
        </p>
        <div>
          <h3>First seen in</h3>
          <p>
            <span>Place of appearance: </span>
            {arrayTest.origin?.name}
          </p>
          <p>
            <span>First appearance: </span>
            {arrayTest.origin?.url}
            {/*ПОТОМ*/}
          </p>
        </div>
        <div>
          <h3>Last seen in</h3>
          <p>
            <span>Place of appearance: </span>
            {arrayTest.location?.name}
          </p>
          <p>
            <span>Last appearance: </span>
            {arrayTest.location?.url}
            {/*ПОТОМ*/}
          </p>
        </div>
        <div>
          <h3>Appeared in</h3>
          <ul>
            {arrayTest.episode.map((item) => {
              return <li>Episode: {item.replace(/[^0-9]/g, "")}</li>;
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
