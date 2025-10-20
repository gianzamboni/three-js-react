import { Link, type LinkProps } from "react-router";
import { SketchedBorder } from "~/sketched-components/sketched-border";
import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import styles from "./styles.module.css";

type SketchyLinkProps = LinkProps;
  
export default function SketchyLink({ children, ...props }: SketchyLinkProps) {
  return <Link {...props} className={styles['link-container']}>
    <SketchedBorder baseStrokeWidth={0.01} >
      {children}
    </SketchedBorder>
    <SketchyShadow strokeWidth={0.01} offsetX={3} offsetY={3} />
  </Link>;
}