import SketchyButton from "../button";
import SettingsIcon from "~/utils/icons/settings.svg?react";
import styles from "./styles.module.css";
import commonStyles from "../common.module.css";
import { levaStore } from "leva";

export default function SketchyLevaPanel() {
  
    console.log(levaStore)
    return (<div className={`${styles["panel-container"]}`}>
      <SketchyButton className={`${styles["settings-button"]} ${commonStyles["interactive-element"]}`} >
        <SettingsIcon className={styles["settings-icon"]} />
      </SketchyButton>
      <div>
        <p>Bottom Panel</p>
      </div>
    </div>);
}