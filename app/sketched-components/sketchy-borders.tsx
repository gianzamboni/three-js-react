import { memo, type PropsWithChildren, type ReactNode } from "react";

import commonStyles from "./common.module.css";
import { RandomRectangle } from "./svg/rectangle";

import type { Side, StrokeWidth } from "./utils";

export type SketchedBorderProps = PropsWithChildren<{
  className?: string;
  sketchySVG?: ReactNode;
  baseStrokeWidth?: StrokeWidth;
  hiddenSides?: Side[];
}>;

export function SketchyBorder(props: SketchedBorderProps) {
  const hiddenSides = props.hiddenSides ?? [];
  
  return (
    <div className={props.className}>
      {props.children}
      <svg
        className={commonStyles['sketchy-trace']}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
      >
        {props.sketchySVG}
        <RandomRectangle strokeWidth={props.baseStrokeWidth ?? "sm"} hiddenSides={hiddenSides} />
        <RandomRectangle strokeWidth={props.baseStrokeWidth ?? "sm"} hiddenSides={hiddenSides} />
      </svg>
    </div>
  );
};

export const MemoizedSketchedBorder = memo(SketchyBorder);