import { memo } from "react";
import { getRandomNumber } from "~/utils/random";

function randomizeControl(base: number, offset: number) {
  return base + getRandomNumber(-offset, offset);
}

function Side(props: { startX: number, startY: number, firstControlX: number, firstControlY: number, secondControlX: number, secondControlY: number, endX: number, endY: number }) {
  return <path d={`M ${props.startX} ${props.startY} C ${props.firstControlX} ${props.firstControlY} ${props.secondControlX} ${props.secondControlY} ${props.endX} ${props.endY}`} />
}

function RandomSide(props: { startX: number, startY: number, endX: number, endY: number, power: number }) {
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

export function RandomRectangle() {
  const xTop = getRandomNumber(1, 1.5);
  const yTop = getRandomNumber(1, 1.5);
  const xBottom = getRandomNumber(98, 98.5);
  const yBottom = getRandomNumber(98, 98.5);

  return (<g>
    <RandomSide startX={xTop} startY={yTop} endX={xBottom} endY={yTop} power={1.5} />
    <RandomSide startX={xBottom} startY={yTop} endX={xBottom} endY={yBottom} power={0.5} />
    <RandomSide startX={xBottom} startY={yBottom} endX={xTop} endY={yBottom} power={1.5} />
    <RandomSide startX={xTop} startY={yBottom} endX={xTop} endY={yTop} power={0.5} />
  </g>)
}

export const MemoizedRandomRectangle = memo(RandomRectangle);