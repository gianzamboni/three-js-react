import { useEffect, useState } from "react";

import { generateRectangleLimits, type RectangleLimits } from "./utils";

import { randomizedOffset, randomizedOffset2D } from "~/utils/random";

type ClipPathState = {
  limits: RectangleLimits;
  controls: [number, number][];
}

export function RandomRectangleClipPath(props: Readonly<{ boundingBox: DOMRect | null }>) {
  const [ state, setState ] = useState<ClipPathState | null>(null);

  useEffect(() => {
    const limits = generateRectangleLimits(props.boundingBox);
    limits.xLeft -= 1;
    limits.yTop -= 1;
    limits.xRight += 1;
    limits.yBottom += 1;

    const controls = [
      randomizedOffset2D([limits.xLeft, limits.yTop], [limits.xOffset, limits.yOffset]),
      randomizedOffset2D([limits.xLeft, limits.yBottom], [limits.xOffset, limits.yOffset]),
      randomizedOffset2D([limits.xLeft, limits.yBottom], [limits.xOffset, limits.yOffset]),
      randomizedOffset2D([limits.xRight, limits.yBottom], [limits.xOffset, limits.yOffset]),
      randomizedOffset2D([limits.xRight, limits.yBottom], [limits.xOffset, limits.yOffset]),
      randomizedOffset2D([limits.xRight, limits.yTop], [limits.xOffset, limits.yOffset]),
      randomizedOffset2D([limits.xRight, limits.yTop], [limits.xOffset, limits.yOffset]),
      randomizedOffset2D([limits.xLeft, limits.yTop], [limits.xOffset, limits.yOffset]),
    ];
    setState({
      limits: generateRectangleLimits(props.boundingBox),
      controls: controls,
    });
  }, [props.boundingBox]);

  if(state === null) {
    return null;
  }

  return (<path 
    d={`M ${state.limits.xLeft} ${state.limits.yTop} 
        C ${randomizedOffset(state.limits.xLeft, state.limits.xOffset)} ${randomizedOffset(state.limits.yTop, state.limits.   yOffset)} 
          ${randomizedOffset(state.limits.xLeft, state.limits.xOffset)} ${randomizedOffset(state.limits.yBottom, state.limits.yOffset)} 
          ${state.limits.xLeft} ${state.limits.yBottom} 
        C ${randomizedOffset(state.limits.xLeft, state.limits.xOffset)} ${randomizedOffset(state.limits.yBottom, state.limits.yOffset)} 
          ${randomizedOffset(state.limits.xRight, state.limits.xOffset)} ${randomizedOffset(state.limits.yBottom, state.limits.yOffset)} 
          ${state.limits.xRight} ${state.limits.yBottom} 
        C ${randomizedOffset(state.limits.xRight, state.limits.xOffset)} ${randomizedOffset(state.limits.yBottom, state.limits.yOffset)} 
          ${randomizedOffset(state.limits.xRight, state.limits.xOffset)} ${randomizedOffset(state.limits.yTop, state.limits.yOffset)} 
          ${state.limits.xRight} ${state.limits.yTop} 
        C ${randomizedOffset(state.limits.xRight, state.limits.xOffset)} ${randomizedOffset(state.limits.yTop, state.limits.yOffset)} 
          ${randomizedOffset(state.limits.xLeft, state.limits.xOffset)} ${randomizedOffset(state.limits.yTop, state.limits.yOffset)} 
          ${state.limits.xLeft} ${state.limits.yTop} 
    Z`}
  />)
}
  