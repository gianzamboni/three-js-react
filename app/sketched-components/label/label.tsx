import { Html } from "@react-three/drei";

import commonStyles from "../common.module.css";

import type { HtmlProps } from "@react-three/drei/web/Html";
import type { PropsWithChildren } from "react";

import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import { SketchyBorder } from "~/sketched-components/sketchy-borders";

type LabelProps = PropsWithChildren<HtmlProps>
export default function Label({ children, ...props }: LabelProps) {
return  <Html {...props} >
  <SketchyBorder className={commonStyles.label} baseStrokeWidth="xs">
    <SketchyShadow strokeWidth="xs" offsetX={0.1} offsetY={2} />
    {children} 
  </SketchyBorder>
</Html>;
}