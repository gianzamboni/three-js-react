import SketchyButton from "../../button";

import styles from "./styles.module.css";

import SettingsIcon from "~/utils/icons/settings.svg?react";


type SettingsButtonProps = Readonly<{
  onClick: () => void;
  className?: string;
}>;

export default function SettingsButton({ onClick, className }: SettingsButtonProps) {
  return (
    <SketchyButton className={`${styles["settings-button"]} ${className ?? ""}`} onClick={onClick}>
      <SettingsIcon className={styles["settings-icon"]} />
    </SketchyButton>
  );
}
