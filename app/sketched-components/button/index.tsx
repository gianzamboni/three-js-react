import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { SketchedBorder } from "~/sketched-components/sketched-border";
import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import styles from "./styles.module.css";
import commonStyles from "../common.module.css";

type SketchyButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default function SketchyButton({ children, className, ...props }: SketchyButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={styles["sketchy-button"]}
    >
      <SketchedBorder baseStrokeWidth="md">
        <SketchyShadow />
        {children}
      </SketchedBorder>
    </button>
  );
}

