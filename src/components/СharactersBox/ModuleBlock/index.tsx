import { useContext } from "react";
import { ContextAll } from "../../../App";
import { IPropsEpisode } from "../../../types/episode";
import { ModuleItem } from "../ModuleItem";
import styles from "./style.module.css";

interface IProps {
  episodes: IPropsEpisode[];
  onClickCloseModuleBlock: () => void;
}

export const ModuleBlock = ({ episodes, onClickCloseModuleBlock }: IProps) => {
  const { openName, setOpenName } = useContext(ContextAll);

  let qww = episodes.filter((item) => item.id === +openName);
  return (
    <div className={styles.moduleBlock__block}>
      {qww.map((item) => {
        return (
          <ModuleItem
            id={0}
            episode={item.episode}
            season={item.season}
            name={item.name}
            date={item.date}
            url={item.url}
            description={item.description}
            onClickCloseModule={onClickCloseModuleBlock}
          />
        );
      })}
    </div>
  );
};
