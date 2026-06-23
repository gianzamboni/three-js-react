import type { MeshProps } from "../types/types";
import type { Ref } from 'react';
import type { Mesh } from 'three';

type CubeProps = MeshProps & { ref?: Ref<Mesh> };

export default function Cube({ ref: refProp, children, ...props }: CubeProps) {
  return (
    <mesh ref={refProp} {...props}>
      <boxGeometry />
      {children}
    </mesh>
  );
}

export type PurpleCubeProps = Readonly<Omit<CubeProps, 'position-x' | 'scale'>>
export function PurpleCube({ ref: refProp, ...props }: PurpleCubeProps) {
  return <Cube ref={refProp} position-x={2} scale={1.5} {...props}>
    <meshStandardMaterial color="mediumpurple" />
  </Cube>;
}