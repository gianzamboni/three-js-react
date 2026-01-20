import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { v4 } from "uuid";

import { MemoizedSketchedBorder } from "../sketchy-borders";
import { RandomRectangleClipPath } from "../svg/rectangle-clip-path";

import styles from "./styles.module.css";


export type SketchedImageProps = Readonly<ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
  src: string;
  alt: string;
}>

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