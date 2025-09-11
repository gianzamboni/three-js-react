import { Html } from "@react-three/drei";
import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import { SketchedBorder } from "~/sketched-components/sketched-border";
import commonStyles from "./common.module.css";
import type { HtmlProps } from "@react-three/drei/web/Html";
import type { PropsWithChildren } from "react";

type LabelProps = PropsWithChildren<HtmlProps>
export default function Label({ children, ...props }: LabelProps) {
return  <Html {...props} >
  <SketchedBorder className={commonStyles.label} baseStrokeWidth={0.005}>
    <SketchyShadow strokeWidth={0.0005} offsetX={0.1} offsetY={2} />
    {children} 
  </SketchedBorder>
</Html>;
}