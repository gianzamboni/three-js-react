import type { MeshProps } from "../types/types";
import type { Ref } from 'react';
import type { Mesh } from 'three';

export type SphereProps = Readonly<MeshProps & {
  color?: string;
  ref?: Ref<Mesh>;
}>;

export function Sphere({ ref: refProp, children, ...props }: SphereProps) {
  return (
    <mesh ref={refProp} {...props}>
      <sphereGeometry />
      {children}
    </mesh>
  );
}

export type OrangeSphereProps = Readonly<Omit<SphereProps, 'position-x'>>;
export function OrangeSphere({ ref: refProp, children, ...props }: OrangeSphereProps) {
  return <Sphere ref={refProp} position-x={-2} {...props}>
    <meshStandardMaterial color="orange" />
    {children}
  </Sphere>;
}