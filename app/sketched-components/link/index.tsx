import { Link, type LinkProps } from "react-router";

import commonStyles from "../common.module.css";

import styles from "./styles.module.css";

import type { ComponentType } from "react";

import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import { SketchyBorder } from "~/sketched-components/sketchy-borders";

type SketchyLinkProps = Readonly<LinkProps> & {
  icon: ComponentType<{ className?: string }>;
  ariaLabel: string;
  arialLabelledBy: string     
};
  
export default function SketchyLink({ icon: Icon, className, ariaLabel, arialLabelledBy, ...props }: SketchyLinkProps) {
  return <Link {...props} 
  className={`${className}  ${styles['link-container']} ${commonStyles["interactive"]} ${commonStyles["animated"]} ${commonStyles["interactive-small"]}`}
  aria-label={ariaLabel}
  aria-labelledby={arialLabelledBy}>
      <SketchyBorder baseStrokeWidth="md" >
        <Icon className={styles['sketchy-link-icon']} />
      </SketchyBorder>
      <SketchyShadow strokeWidth="md" offsetX={3} offsetY={3} />
    </Link>;
  }