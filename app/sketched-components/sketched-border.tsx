import { RandomRectangle } from "./svg/rectangle";
import commonStyles from "./common.module.css";
import { memo, useMemo, type PropsWithChildren } from "react";
import { v4 } from "uuid";
import { randomBoolean } from "~/utils/random";

export type SketchedBorderProps = PropsWithChildren<{
  className?: string;
  sketchySVG?: React.ReactNode;
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
        <RandomRectangle />
        <RandomRectangle />
      </svg>
    </div>
  );
};

export const MemoizedSketchedBorder = memo(SketchedBorder);