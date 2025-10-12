import type { MeshProps } from "./types";


export default function Floor({ children, ...props }: MeshProps) {
  return (
    <mesh rotation-x={-Math.PI * 0.5} scale={10}{...props}>
      <planeGeometry/>
      {children}
    </mesh>
  );
};