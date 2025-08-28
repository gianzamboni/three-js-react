import { RandomRectangle } from "./svg/rectangle";
import commonStyles from "./common.module.css";
import { memo, useMemo, type PropsWithChildren } from "react";
import { v4 } from "uuid";
import { randomBoolean } from "~/utils/random";

export type SketchedBorderProps = PropsWithChildren<{
  className?: string;
  sketchySVG?: React.ReactNode;
  baseStrokeWidth?: number;
}>;

export function SketchedBorder(props: SketchedBorderProps) {
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
        <RandomRectangle strokeWidth={props.baseStrokeWidth ?? 0.0001} />
        <RandomRectangle strokeWidth={props.baseStrokeWidth ?? 0.0001} />
      </svg>
    </div>
  );
};

export const MemoizedSketchedBorder = memo(SketchedBorder);