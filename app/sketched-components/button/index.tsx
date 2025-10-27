import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { SketchedBorder } from "~/sketched-components/sketched-border";
import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import styles from "./styles.module.css";
import commonStyles from "../common.module.css";

type SketchyButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default function SketchyButton({ children, className, type = "button", ...props }: SketchyButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={`${styles["button-container"]} ${className ?? ""} ${commonStyles["interactive-element"]} ${commonStyles["interactive-element-small"]}`}
    >
      <SketchedBorder baseStrokeWidth={0.01}>
        {children}
      </SketchedBorder>
      <SketchyShadow offsetX={3} offsetY={3} />
    </button>
  );
}

