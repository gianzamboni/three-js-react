import { useState } from "react";

import { STROKE_WIDTHS, type StrokeWidth } from "../utils";

import { Side } from "./line";

import type { Point2D } from "~/types/types";

import { Random } from "~/utils/random";

type RandomSideProps = Readonly<{
  start: Point2D;
  end: Point2D;
  power: number;
  strokeWidth?: StrokeWidth;
}>

export function RandomSide(props: RandomSideProps) {

  const [controls] = useState<Point2D[]>(() => {
    const offset: [number, number] = [props.power, props.power];
    return [Random.offset2D(props.start, offset), Random.offset2D(props.end, offset)];
  });

  return <Side 
    start={props.start}
    firstControl={controls[0]}
    secondControl={controls[1]}
    end={props.end}
    strokeWidth={STROKE_WIDTHS[props.strokeWidth ?? "sm"]}
  />
}