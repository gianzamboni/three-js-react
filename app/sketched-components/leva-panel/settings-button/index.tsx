import SketchyButton from "../../button";

import styles from "./styles.module.css";

import SettingsIcon from "~/utils/icons/settings.svg?react";


type SettingsButtonProps = Readonly<{
  onClick: () => void;
  className?: string;
}>;

export default function SettingsButton({ onClick, className }: SettingsButtonProps) {
  return (
    <SketchyButton className={`${styles["settings-button"]} ${className ?? ""}`} onClick={onClick} aria-label="Open settings panel" title="Open settings panel">
      <SettingsIcon className={styles["settings-icon"]} />
    </SketchyButton>
  );
}
