import { LevaPanel, levaStore } from 'leva';
import { forwardRef } from 'react';

import commonStyles from "../common.module.css"

import { levaTheme } from './leva-theme';
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
      <ResponsiveSketchyPanel levaStore={levaStore} ref={ref} />
        { activeStore && levaStores[activeStore] && 
          <div className={styles["leva-custom-container"]}>
            <LevaPanel 
              store={levaStores[activeStore]} 
              fill={true}
              flat={true}
              oneLineLabels={false}
              theme={levaTheme}
              titleBar={false}
              hideCopyButton={true}
              />
          </div> }
    </div>
  );
});

BottomPanel.displayName = 'BottomPanel';

export default BottomPanel;