import { levaStore } from 'leva';
import { forwardRef, useEffect, useState } from 'react';

import commonStyles from "../common.module.css"

import SketchyLevaPanel from './sketchy-leva-panel';
import styles from "./styles.module.css";

import { useSidePanel } from '~/stores/side-panel';

type BottomPanelProps = Readonly<{
  isOpen: boolean;
}>;

const BottomPanel = forwardRef<HTMLDivElement, BottomPanelProps>(({ isOpen }, ref) => {

  const { levaStores, activeStore } = useSidePanel();
  const [renderedStore, setRenderedStore] = useState<string | null>(activeStore ?? null);
  const [isAtBottom, setIsAtBottom] = useState(!activeStore);
  const transitionMs = 300;

  useEffect(() => {
    if (activeStore === renderedStore) return;

    setIsAtBottom(true);
    const timeout = setTimeout(() => {
      setRenderedStore(activeStore ?? null);
      // Slide back up only when we have a store to show.
      setIsAtBottom(!activeStore);
    }, transitionMs);

    return () => clearTimeout(timeout);
  }, [activeStore, renderedStore, transitionMs]);

  const displayedStore = renderedStore ? levaStores[renderedStore] : undefined;
  
  let className = `${styles["bottom-panel"]} ${commonStyles["animated"]}`
  className += ` ${styles[isOpen ? "opened" : "closed"]}`;

  return (
    <div className={className} ref={ref}>
      <div className={styles["leva-custom-container"]} >
          <SketchyLevaPanel store={levaStore} />
        </div>
        <div
          className={`${commonStyles["animated"]} ${isAtBottom ? styles["closed"] : styles["opened"]}`}
          style={{ zIndex: `-1` }}
        >
          {displayedStore && (
            <div className={styles["leva-custom-container"]}>
              <SketchyLevaPanel store={displayedStore} />
            </div>
          )}
        </div>
    </div>
  );
});

BottomPanel.displayName = 'BottomPanel';

export default BottomPanel;