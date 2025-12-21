import { Link, type LinkProps } from "react-router";
import { SketchyBorder } from "~/sketched-components/sketchy-borders";
import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import styles from "./styles.module.css";
import commonStyles from "../common.module.css";

type SketchyLinkProps = LinkProps;
  
export default function SketchyLink({ children, className, ...props }: SketchyLinkProps) {
  return <Link {...props} className={`${styles['link-container']} ${className} ${commonStyles["interactive"]} ${commonStyles["animated"]} ${commonStyles["interactive-small"]} ${commonStyles["animated"]}`}>
      <SketchyBorder baseStrokeWidth="md" >
        {children}
      </SketchyBorder>
      <SketchyShadow strokeWidth="md" offsetX={3} offsetY={3} />
    </Link>;
  }