import type { MeshProps } from "./types";

export type SphereProps = MeshProps & {
  color?: string;
};

export default function Sphere({ children, color, ...props }: SphereProps) {
  return (
    <mesh {...props}>
      <sphereGeometry />
      <meshStandardMaterial color={color} />
      {children}
    </mesh>
  );
};  