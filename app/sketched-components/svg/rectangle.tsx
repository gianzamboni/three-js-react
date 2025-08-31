import { memo } from "react";
import { getRandomNumber, randomizedOffset } from "~/utils/random";
import { RandomSide } from "./randomized-line";
import { generateRectangleLimits } from "./utils";

export function RandomRectangleClipPath(props: { boundingBox: DOMRect | null }) {
  
  let { xLeft, yTop, xRight, yBottom, xOffset, yOffset } = generateRectangleLimits(props.boundingBox);
 
  xLeft -= 1;
  yTop -= 1;
  xRight += 1;
  yBottom += 1;

  return (<path 
    d={`M ${xLeft} ${yTop} 
        C ${randomizedOffset(xLeft, xOffset)} ${randomizedOffset(yTop, yOffset)} 
          ${randomizedOffset(xLeft, xOffset)} ${randomizedOffset(yBottom, yOffset)} 
          ${xLeft} ${yBottom} 
        C ${randomizedOffset(xLeft, xOffset)} ${randomizedOffset(yBottom, yOffset)} 
          ${randomizedOffset(xRight, xOffset)} ${randomizedOffset(yBottom, yOffset)} 
          ${xRight} ${yBottom} 
        C ${randomizedOffset(xRight, xOffset)} ${randomizedOffset(yBottom, yOffset)} 
          ${randomizedOffset(xRight, xOffset)} ${randomizedOffset(yTop, yOffset)} 
          ${xRight} ${yTop} 
        C ${randomizedOffset(xRight, xOffset)} ${randomizedOffset(yTop, yOffset)} 
          ${randomizedOffset(xLeft, xOffset)} ${randomizedOffset(yTop, yOffset)} 
          ${xLeft} ${yTop} 
    Z`}
  />)
}
  
export function RandomRectangle(props: { strokeWidth?: number }) {
  const { xLeft, yTop, xRight, yBottom, xOffset, yOffset } = generateRectangleLimits(null);
  return (<g>
    <RandomSide start={[xLeft, yTop]} end={[xRight, yTop]} power={xOffset} strokeWidth={props.strokeWidth} />
    <RandomSide start={[xRight, yTop]} end={[xRight, yBottom]} power={yOffset} strokeWidth={props.strokeWidth} />
    <RandomSide start={[xRight, yBottom]} end={[xLeft, yBottom]} power={xOffset} strokeWidth={props.strokeWidth} />
    <RandomSide start={[xLeft, yBottom]} end={[xLeft, yTop]} power={yOffset} strokeWidth={props.strokeWidth} />
  </g>)
}

export const MemoizedRandomRectangle = memo(RandomRectangle);