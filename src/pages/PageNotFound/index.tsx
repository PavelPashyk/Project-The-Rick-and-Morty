import { useNavigate } from "react-router-dom";
import { ContainerBack } from "../../components/PageElementsBox/ContainerBack";
import { LinkToPage } from "../../components/PageElementsBox/LinkToPage";
import { Wrapper } from "../../components/PageElementsBox/Wrapper";
import styles from "./style.module.css";

export const PageNotFound = () => {
  const navigate = useNavigate();
  const navigateToBack = () => {
    navigate(-1);
  };
  return (
    <ContainerBack stylesBackGround={"bgNotFound"}>
      <Wrapper classNameWrapper={styles.pageNotFound__box}>
        <h2 className={styles.pageNotFound__title}>Page not found</h2>
      </Wrapper>
      <LinkToPage onClickLink={navigateToBack} textLink={"Back"} />
    </ContainerBack>
  );
};
