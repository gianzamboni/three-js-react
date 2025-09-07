import { RandomSide } from "./svg/randomized-line";
import commonStyles from "./common.module.css";
import { generateRectangleLimits } from "./svg/utils";

export type RandomShadowProps = {
  strokeWidth?: number;
}
export function RandomShadow({ strokeWidth }: RandomShadowProps) {
  const { xLeft, yTop, xRight, yBottom, yOffset, xOffset } = generateRectangleLimits(null);

  return (<g>
    <RandomSide start={[xRight, yTop]} end={[xRight, yBottom]} power={yOffset} strokeWidth={strokeWidth} />
    <RandomSide start={[xRight, yBottom]} end={[xLeft, yBottom]} power={xOffset} strokeWidth={strokeWidth} />
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