import { LevaPanel, levaStore as LevaStoreType } from 'leva';
import { forwardRef, useEffect, useState } from 'react';

import { MemoizedSketchyShadow } from '../randomized-shadow';
import { MemoizedSketchedBorder } from '../sketchy-borders';

import { levaTheme } from './leva-theme';
import styles from "./styles.module.css";

type ResponsiveSketchyPanelProps = {
  levaStore: typeof LevaStoreType;
};

const ResponsiveSketchyPanel = forwardRef<HTMLDivElement, ResponsiveSketchyPanelProps>(({ levaStore }, ref) => {
  const [borderKey, setBorderKey] = useState(0);
  const [previousControlCount, setPreviousControlCount] = useState(0);
  const mainStore = levaStore.useStore();

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
    <div className={styles["leva-custom-container"]} ref={ref}>
        <MemoizedSketchedBorder key={borderKey} baseStrokeWidth='sm'>
          <MemoizedSketchyShadow strokeWidth='sm' offsetX={1} offsetY={1}/>
          <LevaPanel
            store={levaStore}
            theme={levaTheme}
            fill={true}
            flat={true}
            oneLineLabels={false}
            titleBar={false}
            hideCopyButton={true}
          />
        </MemoizedSketchedBorder>
      </div>
  );
});

ResponsiveSketchyPanel.displayName = 'ResponsiveSketchyPanel';

export default ResponsiveSketchyPanel;
