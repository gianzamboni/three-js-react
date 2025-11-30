import { RandomRectangle } from "./svg/rectangle";
import commonStyles from "./common.module.css";
import { memo, type PropsWithChildren } from "react";
import type { StrokeStyle } from "three/examples/jsm/Addons.js";
import type { Side, StrokeWidth } from "./utils.ts";

export type SketchedBorderProps = PropsWithChildren<{
  className?: string;
  sketchySVG?: React.ReactNode;
  baseStrokeWidth?: StrokeWidth;
  hiddenSides?: Side[];
}>;

export function SketchedBorder(props: SketchedBorderProps) {
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
      </svg>
    </div>
  );
};

export const MemoizedSketchedBorder = memo(SketchedBorder);