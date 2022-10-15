import { Button } from "../../components/Button";
import { ContainerBack } from "../../components/ContainerBack";
import { Wrapper } from "../../components/Wrapper";
import styles from "./style.module.css";

export const PageStart = () => {
  return (
    <ContainerBack stylesBackGround={"bgFirst"}>
      <Wrapper classNameWrapper={styles.block__inner}>
        <Button text={"enter"} type={"button"} typeStyles={"btnStart"} onClickBtn={() => {}} />
        <a className={styles.linkStyle} href="#">about the project</a>
      </Wrapper>
    </ContainerBack>
  )
}