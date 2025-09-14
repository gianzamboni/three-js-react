import type { MeshProps } from "./types";


export default function Cube({ children, ...props }: MeshProps) {
  return (
    <mesh {...props}>
      <boxGeometry />
      {children}
    </mesh>
  );
}