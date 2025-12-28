import { Leva, LevaPanel, levaStore } from 'leva';
import { forwardRef, useEffect, useState } from 'react';

import commonStyles from "../common.module.css"
import { MemoizedSketchyShadow } from '../randomized-shadow';
import { MemoizedSketchedBorder } from '../sketchy-borders';

import { levaTheme } from './leva-theme';
import styles from "./styles.module.css";

import { useLevaStores } from '~/stores/leva-stores';

type BottomPanelProps = {
  isOpen: boolean;
};

const BottomPanel = forwardRef<HTMLDivElement, BottomPanelProps>(({ isOpen }, ref) => {

  const { levaStores } = useLevaStores();
  const mainStore = levaStore.useStore();
  const [borderKey, setBorderKey] = useState(0);
  const [previousControlCount, setPreviousControlCount] = useState(0);
  
  let className = `${styles["bottom-panel"]} ${commonStyles["animated"]}`
  className += ` ${styles[isOpen ? "opened" : "closed"]}`;

  useEffect(() => {
    const currentControlCount = Object.keys(mainStore.data).length;
    if (currentControlCount !== previousControlCount) {
      setBorderKey(prev => prev + 1);
      setPreviousControlCount(currentControlCount);
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
          {levaStores.map((store) => (
            <LevaPanel key={store.storeId} store={store} theme={levaTheme}/>
          ))}
        </div>
    </div>
  );
});

BottomPanel.displayName = 'BottomPanel';

export default BottomPanel;