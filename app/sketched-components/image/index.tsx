import { useEffect, useMemo, useRef, useState, type ImgHTMLAttributes } from "react";
import { MemoizedSketchedBorder, SketchedBorder } from "../sketched-border";
import { v4 } from "uuid";
import styles from "./styles.module.css";
import { RandomRectangleClipPath } from "../svg/rectangle-clip-path";

export type SketchedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
  baseStrokeWidth?: number;
  src: string;
  alt: string;
}

export const SketchedImage = (props: SketchedImageProps) => {
  const [pathId, setPathId] = useState<string>();
  const [boundingBox, setBoundingBox] = useState<DOMRect | null>(null);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setPathId(`path-${v4()}`);

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

  return (<MemoizedSketchedBorder className={`relative ${props.className}`}
    sketchySVG={<defs>
      <clipPath id={pathId}>
        <RandomRectangleClipPath boundingBox={boundingBox} />
      </clipPath>
    </defs>}>
    <img
      src={props.src}
      alt={props.alt}
      className={`${styles['sketchy-image']} ${props.className}`}
      style={{ clipPath: `url(#${pathId})` }} 
      ref={imgRef}
    />
  </MemoizedSketchedBorder>);
}