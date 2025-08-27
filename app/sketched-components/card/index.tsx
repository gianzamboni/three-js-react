import { Link } from "react-router";
import styles from "./styles.module.css";
import commonStyles from "../common.module.css";
import { MemoizedSketchedBorder, SketchedBorder } from "../sketched-border";
import { SketchedImage } from "../image";
import { RandomSide } from "../svg/rectangle";
import { getRandomNumber } from "~/utils/random";

interface SketchedCardProps {
  link: string;
  thumbnail: string;
  title: string;
  description: string;
}


function SketchyShadow() {
  
  return (
    <g>
      <RandomSide 
        startX={getRandomNumber(0.985, 1)} startY={getRandomNumber(0, 0.015)} endX={getRandomNumber(0.985, 1)} endY={getRandomNumber(0.985, 1)} strokeWidth={0.0001} />
    </g>
  )
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
        sketchySVG={<SketchyShadow />}
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
