import { getRandomNumber } from "~/utils/random";
import { RandomSide } from "./randomized-line";

export function generateShadowRectangleLimits(boundingBox?: DOMRect) {
  return {
    xLeft: getRandomNumber(0.01, 0.03) * (boundingBox?.width ?? 1),
    yTop: getRandomNumber(0.02, 0.03) * (boundingBox?.height ?? 1),
    xRight: getRandomNumber(0.985, 0.99) * (boundingBox?.width ?? 1),
    yBottom: getRandomNumber(0.985, 1.02) * (boundingBox?.height ?? 1),
    xOffset: 0.0001 * (boundingBox?.width ?? 1),
    yOffset: 0.001 * (boundingBox?.height ?? 1),
  }
}

export type RandomShadowProps = {
  strokeWidth?: number;
}
export function RandomShadow({ strokeWidth }: RandomShadowProps) {
  const { xLeft, yTop, xRight, yBottom, yOffset, xOffset } = generateShadowRectangleLimits();

  return (<g>
    <RandomSide startX={xRight} startY={yTop} endX={xRight} endY={yBottom} power={yOffset} strokeWidth={strokeWidth} />
    <RandomSide startX={xLeft} startY={yBottom} endX={xRight} endY={yBottom} power={yOffset} strokeWidth={strokeWidth} />
  </g>)
}


export type SketchyShadowProps = {
  strokeWidth?: number;
}
export function SketchyShadow({ strokeWidth }: SketchyShadowProps) {
  return (
    <g>
      <RandomShadow strokeWidth={strokeWidth ?? 0.001} />
      <RandomShadow strokeWidth={strokeWidth ?? 0.001} />
    </g>
  )
}