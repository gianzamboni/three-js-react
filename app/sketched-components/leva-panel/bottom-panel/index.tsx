import { levaStore } from 'leva';
import { useEffect, useState, type Ref } from 'react';

import commonStyles from "../../common.module.css";
import SketchyLevaPanel from '../sketchy-leva-panel';

import styles from "./styles.module.css";

import { useSidePanel } from '~/stores/side-panel';

const TRANSITION_MS = 300;

type BottomPanelProps = Readonly<{
  ref?: Ref<HTMLDivElement>;
}>;

function BottomPanel({ ref }: BottomPanelProps) {

  const { levaStores, activeStore, isOpen } = useSidePanel();
  const [renderedStore, setRenderedStore] = useState<string | null>(activeStore ?? null);
  const [isContextPanelSlidDown, setIsContextPanelSlidDown] = useState(!activeStore);

  useEffect(() => {
    if (activeStore === renderedStore) return;

    setIsContextPanelSlidDown(true);
    const timeout = setTimeout(() => {
      setRenderedStore(activeStore ?? null);
      // Slide back up only when we have a store to show.
      setIsContextPanelSlidDown(!activeStore);
    }, TRANSITION_MS);

    return () => clearTimeout(timeout);
  }, [activeStore, renderedStore]);

  const displayedStore = renderedStore ? levaStores[renderedStore] : undefined;

  const wrapperClassName = `${styles["bottom-panel"]} ${commonStyles["animated"]}${!isOpen ? ` ${styles["closed"]}` : ""}`;

  return (
    <div className={wrapperClassName} ref={ref}>
      <div className={styles["leva-custom-container"]}>
        <SketchyLevaPanel store={levaStore} />
      </div>
      <div
        className={`${commonStyles["animated"]} ${isContextPanelSlidDown ? styles["closed"] : ""}`}
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
}

export default BottomPanel;
