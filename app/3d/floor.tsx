import type { PropsWithChildren } from "react";

type FloorProps = PropsWithChildren<{}>;

export default function Floor({ children }: FloorProps) {
  return (
    <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
      <planeGeometry/>
      {children}
    </mesh>
  );
};