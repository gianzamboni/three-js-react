import { Link } from "react-router";

import commonStyles from "../common.module.css";
import { SketchedImage } from "../image";
import { SketchyShadow } from "../randomized-shadow";
import { SketchyBorder } from "../sketchy-borders";

import styles from "./styles.module.css";

type SketchedCardProps = Readonly<{
  link: string;
  thumbnail: string;
  title: string;
  description: string;
  expanded?: boolean;
  className?: string;
  targetBlank?: boolean;
}>

export function SketchedCard({
  link,
  thumbnail,
  title,
  description,
  className,
  targetBlank,
}: SketchedCardProps) {
  return (
    <Link 
    to={link} 
    className={`${styles['card-link']} ${className} ${commonStyles["interactive"]} ${commonStyles["animated"]}`} 
    target={targetBlank ? '_blank' : '_self'}
    >
      <SketchyBorder 
        className={`relative ${styles['card']} ${commonStyles['sketchy-container-margin']}`}
      >
        <SketchyShadow offsetX={0.5} offsetY={1} strokeWidth="sm"/>
        <div className={styles['thumbnail-container']}>
          <SketchedImage src={thumbnail} alt={title} className={styles['sketchy-thumbnail']} />
        </div>
        <div className={styles['text-container']}>
          <h2>{title}</h2>
          <p className={styles['description']} dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </SketchyBorder>
    </Link>
  );
}
