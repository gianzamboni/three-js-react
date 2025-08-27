import type { ImgHTMLAttributes } from "react";
import { SketchedBorder } from "../sketched-border";

export type SketchedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
  baseStrokeWidth?: number;
  src: string;
  alt: string;
}

export const SketchedImage = (props: SketchedImageProps) => {
  return (
    <SketchedBorder className={`relative ${props.className}`}>
      <img src={props.src} alt={props.alt} />
    </SketchedBorder>
  ); 
};