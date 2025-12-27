import type { MeshProps } from "./types";


export default function Cube({ children, ...props }: MeshProps) {
  return (
    <mesh {...props}>
      <boxGeometry />
      {children}
    </mesh>
  );
}

export type PurpleCubeProps = Omit<MeshProps, 'position-x' | 'scale'>
export function PurpleCube(props: PurpleCubeProps ) {
  return <Cube 
    position-x={2}
    scale={1.5}
    {...props}
  >
    <meshStandardMaterial color="mediumpurple" />
  </Cube>
}