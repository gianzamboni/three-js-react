import { Leva, LevaPanel, levaStore } from 'leva';
import { forwardRef, useEffect, useState } from 'react';

import commonStyles from "../common.module.css"
import { MemoizedSketchyShadow } from '../randomized-shadow';
import { MemoizedSketchedBorder } from '../sketchy-borders';

import { levaTheme } from './leva-theme';
import styles from "./styles.module.css";

import { useSidePanel } from '~/stores/side-panel';

type BottomPanelProps = {
  isOpen: boolean;
};

const BottomPanel = forwardRef<HTMLDivElement, BottomPanelProps>(({ isOpen }, ref) => {

  const { levaStores, activeStore } = useSidePanel();
  const mainStore = levaStore.useStore();
  
  const [borderKey, setBorderKey] = useState(0);
  const [previousControlCount, setPreviousControlCount] = useState(0);
  
  let className = `${styles["bottom-panel"]} ${commonStyles["animated"]}`
  className += ` ${styles[isOpen ? "opened" : "closed"]}`;

  useEffect(() => {
    // Get all paths and check which ones are actually rendered
    const allPaths = levaStore.getVisiblePaths();
    const visiblePaths = allPaths.filter((path: string) => {
      try {
        const schema = levaStore.getInput(path);
        // Control is visible if it has a schema (input definition)
        return schema !== undefined;
      } catch {
        return false;
      }
    });
    
    const currentVisibleCount = visiblePaths.length;
    
    if (currentVisibleCount !== previousControlCount) {
      setBorderKey(prev => prev + 1);
      setPreviousControlCount(currentVisibleCount);
    }
  }, [mainStore, previousControlCount]);

  return (
    <div className={className}>
      <div className={styles["leva-custom-container"]} ref={ref}>
          <MemoizedSketchedBorder key={borderKey} baseStrokeWidth='sm'>
            <MemoizedSketchyShadow strokeWidth='sm' offsetX={1} offsetY={1}/>
            <Leva
              theme={levaTheme}
              fill={true}
              flat={true}
              oneLineLabels={false}
              titleBar={false}
              hideCopyButton={true}
            />
          </MemoizedSketchedBorder>
        </div>
        { activeStore && <div className={styles["leva-custom-container"]}>
          <LevaPanel 
            store={levaStores[activeStore]} 
            fill={true}
            flat={true}
            oneLineLabels={false}
            theme={levaTheme}
            hideCopyButton={true}
            />
          </div> }
    </div>
  );
});

BottomPanel.displayName = 'BottomPanel';

export default BottomPanel;