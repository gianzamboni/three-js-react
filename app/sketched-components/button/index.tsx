import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { SketchedBorder } from "~/sketched-components/sketched-border";
import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import styles from "./styles.module.css";
import commonStyles from "../common.module.css";

type SketchyButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const defaultClasses = `${styles["sketchy-button"]} ${commonStyles["interactive"]} ${commonStyles["animated"]} ${commonStyles["interactive-small"]}`

export default function SketchyButton({ children, className, ...props }: SketchyButtonProps) {
  
  return (
    <button
      type="button"
      {...props}
      className={`${defaultClasses} ${className}`}
    >
      <SketchedBorder baseStrokeWidth="md">
        <SketchyShadow strokeWidth="md" offsetX={4} offsetY={4}/>
        {children}
      </SketchedBorder>
    </button>
  );
}

