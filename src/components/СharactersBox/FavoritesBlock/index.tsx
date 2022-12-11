import { LoadingBlock } from "../../PageElementsBox/LoadingBlock";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import styles from "./style.module.css";

export const FavoritesBlock = () => {
  
  return (
    <Wrapper classNameWrapper={styles.favoritesBlock__box}>
      {/* <LoadingBlock /> */}
      <div className={styles.favoritesBlock__img}></div>
    </Wrapper>
  );
};
