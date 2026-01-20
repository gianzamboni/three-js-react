import { useEffect, useMemo, useState } from "react";

import { STROKE_WIDTHS, type Point2D, type StrokeWidth } from "../utils";

import { Side } from "./line";

import { randomizedOffset2D } from "~/utils/random";


type RandomSideProps = Readonly<{
  start: Point2D;
  end: Point2D;
  power: number;
  strokeWidth?: StrokeWidth;
}>

export function RandomSide(props: RandomSideProps) {

  const [ controls, setControls ] = useState<Point2D[]>([]);

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
    strokeWidth={STROKE_WIDTHS[props.strokeWidth ?? "sm"]}
  />
}