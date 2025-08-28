import { useEffect, useMemo, useRef, useState, type ImgHTMLAttributes } from "react";
import { SketchedBorder } from "../sketched-border";
import { v4 } from "uuid";
import { RandomRectangleClipPath } from "../svg/rectangle";
import styles from "./styles.module.css";

export type SketchedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
  baseStrokeWidth?: number;
  src: string;
  alt: string;
}

export const SketchedImage = (props: SketchedImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [boundingBox, setBoundingBox] = useState<DOMRect | null>(null);
  const pathId = useMemo(() => v4(), []);

  useEffect(() => {
    const updateBoundingBox = () => {
      if (imgRef.current) {
        setBoundingBox(imgRef.current.getBoundingClientRect());
      }
    }

    updateBoundingBox();
    window.addEventListener("resize", updateBoundingBox);
    return () => {
      window.removeEventListener("resize", updateBoundingBox);
    }
  }, []);
  
  return (
    <SketchedBorder className={`relative ${props.className}`} 
    sketchySVG={<defs>
      <clipPath id={pathId}>
        <RandomRectangleClipPath boundingBox={boundingBox} />
      </clipPath>
    </defs>}>
      <img src={props.src} alt={props.alt} className={`${styles['sketchy-image']} ${props.className}`} style={{ clipPath: `url(#${pathId})` }} ref={imgRef}/>
    </SketchedBorder>
  ); 
};