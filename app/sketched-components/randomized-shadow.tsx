import { memo } from "react";

import commonStyles from "./common.module.css";
import { RandomSide } from "./svg/randomized-line";
import { generateRectangleLimits } from "./svg/utils";

import type { StrokeWidth } from "./utils.ts";

export type RandomShadowProps = {
  strokeWidth?: StrokeWidth;
}
export function RandomShadow({ strokeWidth }: RandomShadowProps) {
  const { xLeft, yTop, xRight, yBottom, yOffset, xOffset } = generateRectangleLimits(null);

  return (<g>
    <RandomSide start={[xRight, yTop]} end={[xRight, yBottom]} power={yOffset} strokeWidth={strokeWidth} />
    <RandomSide start={[xRight, yBottom]} end={[xLeft, yBottom]} power={xOffset} strokeWidth={strokeWidth} />
  </g>)
}


export type SketchyShadowProps = {
  strokeWidth?: StrokeWidth;
  offsetX?: number;
  offsetY?: number;
}

export function SketchyShadow({ strokeWidth, offsetX, offsetY }: SketchyShadowProps) {
  return (
    <svg viewBox="0 0 1 1" preserveAspectRatio="none" className={`${commonStyles['sketchy-trace']}`} style={{ left: `${offsetX}%`, top: `${offsetY}%` }}> 
      <g>
        <RandomShadow strokeWidth={strokeWidth ?? "sm"} />
        <RandomShadow strokeWidth={strokeWidth ?? "sm"} />
      </g>
    </svg>
  )
}

export const MemoizedSketchyShadow = memo(SketchyShadow);