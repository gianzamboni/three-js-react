import { randomizedOffset, randomizedOffset2D } from "~/utils/random";
import { Side } from "./line";

type RandomSideProps = {
  start: [number, number];
  end: [number, number];
  power: number;
  strokeWidth?: number;
}

export function RandomSide(props: RandomSideProps) {
  return <Side 
    start={props.start}
    firstControl={randomizedOffset2D(props.start, props.power)}
    secondControl={randomizedOffset2D(props.end, props.power)}
    end={props.end}
    strokeWidth={props.strokeWidth}
  />
}