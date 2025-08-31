import { Link } from "react-router";
import styles from "./styles.module.css";
import commonStyles from "../common.module.css";
import { MemoizedSketchedBorder } from "../sketched-border";
import { SketchedImage } from "../image";
import { SketchyShadow } from "../randomized-shadow";

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
    <Link to={link} className={styles['card-link']}>
      <MemoizedSketchedBorder 
        className={`relative ${styles['card']} ${commonStyles['sketchy-container-margin']}`}
      >
        <div className={styles['thumbnail-container']}>
          <SketchyShadow offsetX={0.5} offsetY={1} strokeWidth={0.0001}/>
          <SketchedImage src={thumbnail} alt={title} className={styles['sketchy-thumbnail']} />
        </div>
      <div>
        <h2>{title}</h2>
        <p className={styles['description']}>{description}</p>
      </div>
      </MemoizedSketchedBorder>
    </Link>
  );
}
