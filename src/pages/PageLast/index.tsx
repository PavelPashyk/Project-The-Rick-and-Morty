import { useNavigate } from "react-router-dom";
import { ContainerBack } from "../../components/PageElementsBox/ContainerBack";
import { LinkToPage } from "../../components/PageElementsBox/LinkToPage";
import { Wrapper } from "../../components/PageElementsBox/Wrapper";
import styles from "./style.module.css";

export const PageLast = () => {
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/main");
  };

  return (
    <ContainerBack stylesBackGround={"bgFinish"}>
      <Wrapper classNameWrapper={styles.pageLast__box}>
        <div className={styles.pageLast__blockInner}>
          <h2>
            Name: "Rick and Morty <span>Wiki</span>"
          </h2>
          <p>
            Resource:{" "}
            <a className={styles.link} href="https://rickandmortyapi.com/">
              https://rickandmortyapi.com/
            </a>
          </p>
          <p>Author: Pashyk Pavel</p>
          <p>Year: 2022</p>
        </div>
      </Wrapper>
      <LinkToPage onClickLink={navigateToMain} textLink={"to Home"} />
    </ContainerBack>
  );
};
