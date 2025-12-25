import commonStyles from "../common.module.css";

import styles from "./styles.module.css";

import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import { SketchyBorder } from "~/sketched-components/sketchy-borders";

type SketchyButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const defaultClasses = `${styles["sketchy-button"]} ${commonStyles["interactive"]} ${commonStyles["animated"]} ${commonStyles["interactive-small"]}`

export default function SketchyButton({ children, className, ...props }: SketchyButtonProps) {
  
  return (
    <button
      type="button"
      {...props}
      className={`${defaultClasses} ${className}`}
    >
      <SketchyBorder baseStrokeWidth="md">
        <SketchyShadow strokeWidth="md" offsetX={4} offsetY={4}/>
        {children}
      </SketchyBorder>
    </button>
  );
}

