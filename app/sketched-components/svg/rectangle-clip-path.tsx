import { useMemo } from "react";

import { generateRectangleLimits } from "./utils";

import { randomizedOffset2D } from "~/utils/random";

export function RandomRectangleClipPath(props: Readonly<{ boundingBox: DOMRect | null }>) {
  const state = useMemo(() => {
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

    return { limits, controls };
  }, [props.boundingBox]);

  return (<path 
    d={`M ${state.limits.xLeft} ${state.limits.yTop} 
        C ${state.controls[0][0]} ${state.controls[0][1]} 
          ${state.controls[1][0]} ${state.controls[1][1]} 
          ${state.limits.xLeft} ${state.limits.yBottom} 
        C ${state.controls[2][0]} ${state.controls[2][1]} 
          ${state.controls[3][0]} ${state.controls[3][1]} 
          ${state.limits.xRight} ${state.limits.yBottom} 
        C ${state.controls[4][0]} ${state.controls[4][1]} 
          ${state.controls[5][0]} ${state.controls[5][1]} 
          ${state.limits.xRight} ${state.limits.yTop} 
        C ${state.controls[6][0]} ${state.controls[6][1]} 
          ${state.controls[7][0]} ${state.controls[7][1]} 
          ${state.limits.xLeft} ${state.limits.yTop} 
    Z`}
  />)
}
  