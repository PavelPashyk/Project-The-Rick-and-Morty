import { useNavigate } from "react-router-dom";
import { Button } from "../../components/PageElementsBox/Button";
import { ContainerBack } from "../../components/PageElementsBox/ContainerBack";
import { LinkToPage } from "../../components/PageElementsBox/LinkToPage";
import { Wrapper } from "../../components/PageElementsBox/Wrapper";
import styles from "./style.module.css";

export const PageStart = () => {
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/main");
  };
  const navigateToPageLast = () => {
    navigate("/page_last");
  };

  return (
    <ContainerBack stylesBackGround={"bgFirst"}>
      <Wrapper classNameWrapper={styles.pageStart__box}>
        <Button
          text={"enter"}
          type={"button"}
          typeStyles={"btnStart"}
          onClickBtn={navigateToMain}
        />
        <LinkToPage
          onClickLink={navigateToPageLast}
          textLink={"about the project"}
        />
      </Wrapper>
    </ContainerBack>
  );
};
