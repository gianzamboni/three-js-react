import type { MeshProps } from "./types";

type FloorProps = Readonly<Omit<MeshProps, 'rotation-x' | 'scale'>>;

export default function Floor({ children, ...props }: FloorProps) {
  return (
    <mesh rotation-x={-Math.PI * 0.5} scale={10} {...props}>
      <planeGeometry/>
      {children}
    </mesh>
  );
};

export function GreenFloor(props: Omit<FloorProps, 'position-y'>) {
  return <Floor position-y={-1} {...props}>
    <meshStandardMaterial color="greenYellow" />
  </Floor>
}