import type { PropsWithChildren } from "react";
import type { MeshProps } from "./mesh-props";


export default function Floor({ children, ...props }: MeshProps) {
  return (
    <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10} {...props}>
      <planeGeometry/>
      {children}
    </mesh>
  );
};