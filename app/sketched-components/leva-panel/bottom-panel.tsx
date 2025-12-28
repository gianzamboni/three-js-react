import { Leva, LevaPanel } from 'leva';
import { forwardRef } from 'react';

import commonStyles from "../common.module.css"
import { SketchyShadow } from '../randomized-shadow';
import { MemoizedSketchedBorder } from '../sketchy-borders';

import { levaTheme } from './leva-theme';
import styles from "./styles.module.css";

import { useLevaStores } from '~/stores/leva-stores';

type BottomPanelProps = {
  isOpen: boolean;
};

const BottomPanel = forwardRef<HTMLDivElement, BottomPanelProps>(({ isOpen }, ref) => {

  const { levaStores } = useLevaStores();
  
  let className = `${styles["bottom-panel"]} ${commonStyles["animated"]}`
  className += ` ${styles[isOpen ? "opened" : "closed"]}`;

  return (
    <div className={className}>
      <div className={styles["leva-custom-container"]} ref={ref}>
          <MemoizedSketchedBorder  baseStrokeWidth='sm'>
            <SketchyShadow strokeWidth='sm' offsetX={1} offsetY={1}/>
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