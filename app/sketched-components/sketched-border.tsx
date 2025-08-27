import { MemoizedRandomRectangle } from "./svg/rectangle";
import commonStyles from "./common.module.css";
import { memo, type PropsWithChildren } from "react";

export type SketchedBorderProps = PropsWithChildren<{
  className?: string;
  baseStrokeWidth?: number;
  clipped?: boolean;
}>

export const SketchedBorder = (props: SketchedBorderProps) => {

  return (
    <div className={props.className} >
      {props.children}
      <svg
        className={commonStyles['sketchy-trace']}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <MemoizedRandomRectangle />
        <MemoizedRandomRectangle />
      </svg>
    </div>
  );
};

export const MemoizedSketchedBorder = memo(SketchedBorder);