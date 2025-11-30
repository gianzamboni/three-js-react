import styles from "./styles.module.css";
import SketchyButton from "../button";

export default function Tabs({ tabs, onTabClick }: { tabs: string[]; onTabClick: (tab: string) => void }) {
  return (
    <div className={styles["tabs-container"]}>
      {tabs.map((tab, index) => (
        <SketchyButton style={{ zIndex: tabs.length - index }} key={tab} onClick={() => onTabClick(tab)}>{tab}</SketchyButton>
      ))}
    </div>
  );
}




