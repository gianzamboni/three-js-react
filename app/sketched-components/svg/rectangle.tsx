import { memo, useEffect, useState } from "react";

import { type Side, type StrokeWidth } from "../utils";

import { RandomSide } from "./randomized-line";
import { generateRectangleLimits, type RectangleLimits } from "./utils";

type RandomRectangleProps = {
  strokeWidth: StrokeWidth
  hiddenSides?: Side[];
}

function isSideVisible(side: Side, hiddenSides: Side[]) {
  return !hiddenSides.includes(side);
}

export function RandomRectangle(props: RandomRectangleProps) {
  const hiddenSides = props.hiddenSides ?? [];

  const [ limits, setLimits ] = useState<RectangleLimits | null>(null);

  useEffect(() => {
    setLimits(generateRectangleLimits(null));
  }, []);

  if(limits === null) {
    return null;
  }

  return (<g>
    {isSideVisible("top", hiddenSides) && (
    <RandomSide 
      start={[limits.xLeft, limits.yTop]} 
      end={[limits.xRight, limits.yTop]} 
      power={limits.xOffset} 
      strokeWidth={props.strokeWidth} 
    />
    )}
    {isSideVisible("right", hiddenSides) && (
    <RandomSide 
      start={[limits.xRight, limits.yTop]} 
      end={[limits.xRight, limits.yBottom]} 
      power={limits.yOffset} 
      strokeWidth={props.strokeWidth} 
    />
    )}
    {isSideVisible("bottom", hiddenSides) && (
    <RandomSide 
      start={[limits.xLeft, limits.yBottom]} 
      end={[limits.xRight, limits.yBottom]} 
      power={limits.xOffset} 
      strokeWidth={props.strokeWidth} 
    />
    )}
    {isSideVisible("left", hiddenSides) && (
    <RandomSide 
      start={[limits.xLeft, limits.yBottom]} 
      end={[limits.xLeft, limits.yTop]} 
      power={limits.yOffset} 
      strokeWidth={props.strokeWidth} 
    />
    )}
  </g>)
}

export const MemoizedRandomRectangle = memo(RandomRectangle);