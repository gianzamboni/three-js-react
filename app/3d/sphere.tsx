import type { MeshProps } from "./types";

export type SphereProps = MeshProps & {
  color?: string;
};

export default function Sphere({ children, ...props }: SphereProps) {
  return (
    <mesh {...props}>
      <sphereGeometry />
      {children}
    </mesh>
  );
};  

export function OrangeSphere(props: Omit<SphereProps, 'position-x'>) {
  return <Sphere position-x={-2} {...props}>
    <meshStandardMaterial color="orange" />
  </Sphere>;
}