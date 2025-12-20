import { Leva } from 'leva';
import { levaTheme } from './leva-theme';
import { forwardRef } from 'react';
import styles from "./styles.module.css";
import commonStyles from "../common.module.css"

type BottomPanelProps = {
  isOpen: boolean;
};

const BottomPanel = forwardRef<HTMLDivElement, BottomPanelProps>(({ isOpen }, ref) => {

  let className = `${styles["bottom-panel"]} ${commonStyles["animated"]}`
  className += ` ${styles[isOpen ? "opened" : "closed"]}`;

  return (
    <div className={className}>
      <div ref={ref}  className={styles["leva-custom-container"]}>
        <Leva
          theme={levaTheme}
          fill={true}
          flat={true}
          oneLineLabels={false}
          titleBar={false}
          collapsed={false}
          hideCopyButton={true}
        />
      </div>
    </div>
  );
});

BottomPanel.displayName = 'BottomPanel';

export default BottomPanel;