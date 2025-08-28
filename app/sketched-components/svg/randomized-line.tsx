import { randomizedOffset } from "~/utils/random";
import { Side } from "./line";

type RandomSideProps = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  power: number;
  strokeWidth?: number;
}

export function RandomSide(props: RandomSideProps) {
  return <Side 
    startX={props.startX}
    startY={props.startY}
    firstControlX={randomizedOffset(props.startX, props.power)}
    firstControlY={randomizedOffset(props.startY, props.power)}
    secondControlX={randomizedOffset(props.endX, props.power)}
    secondControlY={randomizedOffset(props.endY, props.power)}
    endX={props.endX}
    endY={props.endY}
    strokeWidth={props.strokeWidth}
  />
}