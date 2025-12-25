import SketchyButton from "../button";
import SettingsIcon from "~/utils/icons/settings.svg?react";
import styles from "./styles.module.css";
import commonStyles from "../common.module.css";
import BottomPanel from "./bottom-panel";
import { useState, useRef, useEffect } from "react";
import { levaStore } from "leva";

export default function SketchyLevaPanel() {
    const [panelOpened, setPanelOpened] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);

    // Used as a triger for a levaStore changes; Not used directly though. 
    // If removed, this component won't work.
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    const store = levaStore.useStore();


    useEffect(() => {
        if (!panelOpened) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                setPanelOpened(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [panelOpened]);

    const hasControls = levaStore.getVisiblePaths().length > 0;
    
    return (hasControls &&
        <div className={styles["panel-container"]}>
            <SketchyButton 
                className={`${styles["settings-button"]} ${commonStyles["interactive-element"]}`} 
                onClick={() => setPanelOpened(!panelOpened)}
            >
                <SettingsIcon className={styles["settings-icon"]} />
            </SketchyButton>
            <BottomPanel ref={panelRef} isOpen={panelOpened} />
        </div>
    );
}