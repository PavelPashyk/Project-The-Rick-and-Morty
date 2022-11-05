import { loading } from "../../../assets/images";
import styles from "./style.module.css";

export const LoadingBlock = () => {
  return (
    <>
      <img
        className={styles.loadingBlock}
        src={loading}
        alt="loading"
      />
    </>
  );
};
