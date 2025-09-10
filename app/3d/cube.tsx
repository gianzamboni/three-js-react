import type { MeshProps } from "./mesh-props";


export default function Cube({ children, color, ...props }: MeshProps) {
  return (
    <mesh scale={1.5} position-x={2} {...props}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
      {children}
    </mesh>
  );
}