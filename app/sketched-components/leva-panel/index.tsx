import SketchyButton from "../button";
import SettingsIcon from "~/utils/icons/settings.svg?react";
import styles from "./styles.module.css";
import commonStyles from "../common.module.css";
import BottomPanel from "./bottom-panel";
import { useState, useRef, useEffect } from "react";

export default function SketchyLevaPanel() {
    const [panelOpened, setPanelOpened] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);

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
    
    return (
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