import { memo, useEffect, useState } from "react";
import { RandomSide } from "./randomized-line";
import { generateRectangleLimits, type RectangleLimits } from "./utils";
import { STROKE_WIDTHS, type StrokeWidth } from "../utils";

type RandomRectangleProps = {
  strokeWidth: StrokeWidth
}

export function RandomRectangle(props: RandomRectangleProps) {

  const [ limits, setLimits ] = useState<RectangleLimits | null>(null);

  useEffect(() => {
    setLimits(generateRectangleLimits(null));
  }, []);

  if(limits === null) {
    return null;
  }

  return (<g>
    <RandomSide 
      start={[limits.xLeft, limits.yTop]} 
      end={[limits.xRight, limits.yTop]} 
      power={limits.xOffset} 
      strokeWidth={props.strokeWidth} 
    />
    <RandomSide 
      start={[limits.xRight, limits.yTop]} 
      end={[limits.xRight, limits.yBottom]} 
      power={limits.yOffset} 
      strokeWidth={props.strokeWidth} 
    />
    <RandomSide 
      start={[limits.xRight, limits.yBottom]} 
      end={[limits.xLeft, limits.yBottom]} 
      power={limits.xOffset} 
      strokeWidth={props.strokeWidth} 
    />
    <RandomSide 
      start={[limits.xLeft, limits.yBottom]} 
      end={[limits.xLeft, limits.yTop]} 
      power={limits.yOffset} 
      strokeWidth={props.strokeWidth} 
    />
  </g>)
}

export const MemoizedRandomRectangle = memo(RandomRectangle);