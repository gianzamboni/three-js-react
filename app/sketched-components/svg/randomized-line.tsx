import { randomizedOffset, randomizedOffset2D } from "~/utils/random";
import { Side } from "./line";
import { useEffect, useMemo, useState } from "react";

type RandomSideProps = {
  start: [number, number];
  end: [number, number];
  power: number;
  strokeWidth?: number;
}

export function RandomSide(props: RandomSideProps) {

  const [ controls, setControls ] = useState<[number, number][]>([]);

  const offset: [number, number] = useMemo(() => [props.power, props.power], [props.power]);

  useEffect(() => {
    setControls([randomizedOffset2D(props.start, offset), randomizedOffset2D(props.end, offset)]);
  }, []);

  if(controls.length === 0) {
    return null;
  }

  return <Side 
    start={props.start}
    firstControl={controls[0]}
    secondControl={controls[1]}
    end={props.end}
    strokeWidth={props.strokeWidth}
  />
}