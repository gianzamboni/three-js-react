import { levaStore } from "leva";
import { useRef, useEffect } from "react";

import BottomPanel from "./bottom-panel";
import SettingsButton from "./settings-button";
import styles from "./styles.module.css";

import { useSidePanel } from "~/stores/side-panel";

type SketchyLevaPanelProps = Readonly<{
  className?: string;
}>
export default function SketchyLevaPanel({ className }: SketchyLevaPanelProps) {
    const panelOpened = useSidePanel((s) => s.isOpen);
    const setIsOpen = useSidePanel((s) => s.setIsOpen);
    const panelRef = useRef<HTMLDivElement>(null);

    // Used as a triger for a levaStore changes; Not used directly though. 
    // If removed, this component won't work.
    // @ts-ignore
    const _store = levaStore.useStore();

    useEffect(() => {
        if (!panelOpened) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [panelOpened, setIsOpen]);

    
    const buttonClickHandler = () => {
        setIsOpen(!panelOpened);
    };

    const hasControls = levaStore.getVisiblePaths().length > 0;
    return (hasControls &&
        <div className={`${styles["panel-container"]} ${className}`}>
            <SettingsButton onClick={buttonClickHandler} />
            <BottomPanel ref={panelRef} isOpen={panelOpened} />
        </div>
    );
}