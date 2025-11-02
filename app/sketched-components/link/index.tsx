import { Link, type LinkProps } from "react-router";
import { SketchedBorder } from "~/sketched-components/sketched-border";
import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import styles from "./styles.module.css";
import commonStyles from "../common.module.css";

type SketchyLinkProps = LinkProps;
  
export default function SketchyLink({ children, className, ...props }: SketchyLinkProps) {
  return <Link {...props} className={`${styles['link-container']} ${className} ${commonStyles["interactive-element"]} ${commonStyles["interactive-element-small"]}`}>
    <SketchedBorder baseStrokeWidth="md" >
        {children}
      </SketchedBorder>
      <SketchyShadow strokeWidth="md" offsetX={3} offsetY={3} />
    </Link>;
  }