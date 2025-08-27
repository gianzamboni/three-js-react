import { memo } from "react";
import { getRandomNumber } from "~/utils/random";

function randomizeControl(base: number, offset: number) {
  return base + getRandomNumber(-offset, offset);
}

type SideProps = {
  startX: number;
  startY: number;
  firstControlX: number;
  firstControlY: number;
  secondControlX: number;
  secondControlY: number;
  endX: number;
  endY: number;
}

function Side(props: SideProps) {
  return <path 
    d={`M ${props.startX} ${props.startY} C ${props.firstControlX} ${props.firstControlY} ${props.secondControlX} ${props.secondControlY} ${props.endX} ${props.endY}`} 
    stroke="currentColor"
    strokeWidth={0.0001}
  />
}

type RandomSideProps = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  power: number;
}

function RandomSide(props: RandomSideProps) {
  return <Side 
    startX={props.startX}
    startY={props.startY}
    firstControlX={randomizeControl(props.startX, props.power)}
    firstControlY={randomizeControl(props.startY, props.power)}
    secondControlX={randomizeControl(props.endX, props.power)}
    secondControlY={randomizeControl(props.endY, props.power)}
    endX={props.endX}
    endY={props.endY}
  />
}

function generateRectangleLimits(boundingBox?: DOMRect) {
  return {
    xTop: getRandomNumber(0.01, 0.015) * (boundingBox?.width ?? 1),
    yLeft: getRandomNumber(0.01, 0.015) * (boundingBox?.height ?? 1),
    xBottom: getRandomNumber(0.98, 0.985) * (boundingBox?.width ?? 1),
    yRight: getRandomNumber(0.98, 0.985) * (boundingBox?.height ?? 1),
    xOffset: 0.01 * (boundingBox?.width ?? 1),
    yOffset: 0.005 * (boundingBox?.height ?? 1),
  }
}

export function RandomRectangleClipPath(props: { boundingBox?: DOMRect | null }) {
  
  const { xTop, yLeft, xBottom, yRight, xOffset, yOffset } = generateRectangleLimits(props.boundingBox);
 
  return (<path 
    d={`M ${xTop} ${yLeft} 
        C ${randomizeControl(xTop, xOffset)} ${randomizeControl(yLeft, yOffset)} 
          ${randomizeControl(xTop, xOffset)} ${randomizeControl(yRight, yOffset)} 
          ${xTop} ${yRight} 
        C ${randomizeControl(xTop, xOffset)} ${randomizeControl(yRight, yOffset)} 
          ${randomizeControl(xBottom, xOffset)} ${randomizeControl(yRight, yOffset)} 
          ${xBottom} ${yRight} 
        C ${randomizeControl(xBottom, xOffset)} ${randomizeControl(yRight, yOffset)} 
          ${randomizeControl(xBottom, xOffset)} ${randomizeControl(yLeft, yOffset)} 
          ${xBottom} ${yLeft} 
        C ${randomizeControl(xBottom, xOffset)} ${randomizeControl(yLeft, yOffset)} 
          ${randomizeControl(xTop, xOffset)} ${randomizeControl(yLeft, yOffset)} 
          ${xTop} ${yLeft} 
    Z`}
  />)
}
  
export function RandomRectangle() {
  const { xTop, yLeft, xBottom, yRight, xOffset, yOffset } = generateRectangleLimits();
  return (<g>
    <RandomSide startX={xTop} startY={yLeft} endX={xBottom} endY={yLeft} power={xOffset} />
    <RandomSide startX={xBottom} startY={yLeft} endX={xBottom} endY={yRight} power={yOffset} />
    <RandomSide startX={xBottom} startY={yRight} endX={xTop} endY={yRight} power={xOffset} />
    <RandomSide startX={xTop} startY={yRight} endX={xTop} endY={yLeft} power={yOffset} />
  </g>)
}

export const MemoizedRandomRectangle = memo(RandomRectangle);