import styles from "./styles.module.css";
import commonStyles from "../common.module.css";
import type { PropsWithChildren } from "react";

type SketchedTitleProps = PropsWithChildren;

export function SketchedTitle({ children }: SketchedTitleProps) {
  return (
    <div className={`relative ${commonStyles['sketchy-container-margin']} ${styles['title']}`}> 
    <h1 className={styles.title}>
      {children}
    </h1>
    <svg
        className={styles['sketchy-trace']}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 5"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 0 C 80 2 100 1 119.068 0.604 c 0.755 0.165 0.905 0.321 1.216 0.686"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}