import type { MeshProps } from "../types/types";

type CubeProps = MeshProps;
export default function Cube({ children, ...props }: CubeProps) {
  return (
    <mesh {...props}>
      <boxGeometry />
      {children}
    </mesh>
  );
}

export type PurpleCubeProps = Readonly<Omit<CubeProps, 'position-x' | 'scale'>>
export function PurpleCube(props: PurpleCubeProps ) {
  return <Cube 
    position-x={2}
    scale={1.5}
    {...props}
  >
    <meshStandardMaterial color="mediumpurple" />
  </Cube>
}