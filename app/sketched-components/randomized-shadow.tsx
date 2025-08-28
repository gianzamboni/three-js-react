import { getRandomNumber } from "~/utils/random";
import { RandomSide } from "./svg/randomized-line";
import commonStyles from "./common.module.css";
import { generateRectangleLimits } from "./svg/utils";

export type RandomShadowProps = {
  strokeWidth?: number;
}
export function RandomShadow({ strokeWidth }: RandomShadowProps) {
  const { xLeft, yTop, xRight, yBottom, yOffset, xOffset } = generateRectangleLimits(null);

  return (<g>
    <RandomSide startX={xRight} startY={yTop} endX={xRight} endY={yBottom} power={yOffset} strokeWidth={strokeWidth} />
    <RandomSide startX={xLeft} startY={yBottom} endX={xRight} endY={yBottom} power={yOffset} strokeWidth={strokeWidth} />
  </g>)
}


export type SketchyShadowProps = {
  strokeWidth?: number;
  offsetX?: number;
  offsetY?: number;
}
export function SketchyShadow({ strokeWidth, offsetX, offsetY }: SketchyShadowProps) {
  return (
    <svg viewBox="0 0 1 1" preserveAspectRatio="none" className={`${commonStyles['sketchy-trace']}`} style={{ left: `${offsetX}%`, top: `${offsetY}%` }}> 
      <g>
        <RandomShadow strokeWidth={strokeWidth ?? 0.001} />
        <RandomShadow strokeWidth={strokeWidth ?? 0.001} />
      </g>
    </svg>
  )
}