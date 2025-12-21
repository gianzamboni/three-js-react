import { Leva } from 'leva';
import { levaTheme } from './leva-theme';
import { forwardRef } from 'react';
import styles from "./styles.module.css";
import commonStyles from "../common.module.css"
import { MemoizedSketchedBorder } from '../sketchy-borders';
import { SketchyShadow } from '../randomized-shadow';

type BottomPanelProps = {
  isOpen: boolean;
};

const BottomPanel = forwardRef<HTMLDivElement, BottomPanelProps>(({ isOpen }, ref) => {

  let className = `${styles["bottom-panel"]} ${commonStyles["animated"]}`
  className += ` ${styles[isOpen ? "opened" : "closed"]}`;

  return (
    <div className={className}>
      <MemoizedSketchedBorder className={styles["leva-custom-container"]} baseStrokeWidth='sm'>
        <SketchyShadow strokeWidth='sm' offsetX={1} offsetY={1}/>
        <div ref={ref}>
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
      </MemoizedSketchedBorder>
    </div>
  );
});

BottomPanel.displayName = 'BottomPanel';

export default BottomPanel;