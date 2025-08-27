import { Link } from "react-router";
import styles from "./styles.module.css";
import commonStyles from "../common.module.css";
import { MemoizedSketchedBorder, SketchedBorder } from "../sketched-border";
import { SketchedImage } from "../image";

interface SketchedCardProps {
  link: string;
  thumbnail: string;
  title: string;
  description: string;
}


export function SketchedCard({
  link,
  thumbnail,
  title,
  description
}: SketchedCardProps) {
  return (
    <Link to={link}>
      <MemoizedSketchedBorder 
        className={`relative ${styles['card']} ${commonStyles['sketchy-container-margin']}`}
      >
        <SketchedImage src={thumbnail} alt={title} className={styles['sketchy-thumbnail']} />
      <div>
        <h2>{title}</h2>
        <p className={styles['description']}>{description}</p>
      </div>
      </MemoizedSketchedBorder>
    </Link>
  );
}
