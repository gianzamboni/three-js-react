import { levaStore } from 'leva';
import { forwardRef } from 'react';

import commonStyles from "../common.module.css"

import ResponsiveSketchyPanel from './responsive-sketchy-panel';
import styles from "./styles.module.css";

import { useSidePanel } from '~/stores/side-panel';

type BottomPanelProps = {
  isOpen: boolean;
};

const BottomPanel = forwardRef<HTMLDivElement, BottomPanelProps>(({ isOpen }, ref) => {

  const { levaStores, activeStore } = useSidePanel();
  
  let className = `${styles["bottom-panel"]} ${commonStyles["animated"]}`
  className += ` ${styles[isOpen ? "opened" : "closed"]}`;

  return (
    <div className={className}>
      <div className={styles["leva-custom-container"]} ref={ref}>
          <ResponsiveSketchyPanel store={levaStore} />
        </div>
        { activeStore && levaStores[activeStore] && <div className={styles["leva-custom-container"]}>
          <ResponsiveSketchyPanel store={levaStores[activeStore]} />
          </div> }
    </div>
  );
});

BottomPanel.displayName = 'BottomPanel';

export default BottomPanel;