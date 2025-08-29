import type { JSX, PropsWithChildren } from "react";
import type { Object3D } from "three";

type CubeProps = JSX.IntrinsicElements["mesh"];

export default function Cube({ children, ...props }: CubeProps) {
  return (
    <mesh scale={1.5} position-x={2} {...props}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
      {children}
    </mesh>
  );
}