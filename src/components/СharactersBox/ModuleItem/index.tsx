import { IPropsEpisode } from "../../../types/episode";
import { Svg } from "../../PageElementsBox/Svg";
import styles from "./style.module.css";

interface IPropsModuleItem extends IPropsEpisode {
  onClickCloseModule: () => void;
}

export const ModuleItem = ({
  id,
  episode,
  season,
  name,
  date,
  url,
  description,
  onClickCloseModule,
}: IPropsModuleItem) => {
  return (
    <div className={styles.moduleItem__block}>
      <h2 className={styles.moduleItem__title}>{name}</h2>
      <div className={styles.moduleItem__textBlock}>
        <p className={styles.moduleItem__text}>
          <span>Episode # </span>
          {episode}
        </p>
        <p className={styles.moduleItem__text}>
          <span>Season # </span>
          {season}
        </p>
        <p className={styles.moduleItem__text}>
          <span>Original air date:</span> {date}
        </p>
      </div>
      <p className={styles.moduleItem__content}>
        <span>Series description:</span> {description}
      </p>
      <a className={styles.moduleItem__link} target="_blank" href={url}>
        <span>Wikipedia</span>
      </a>
      <div className={styles.moduleItem__svg} onClick={onClickCloseModule}>
        <Svg id={"back"} />
      </div>
    </div>
  );
};
