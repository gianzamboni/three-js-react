import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import Cube from "~/3d/cube";
import type { MeshProps } from "~/3d/mesh-props";

type RotatingCubeProps = MeshProps & {
  rotationSpeed?: number;
}

export default function RotatingCube({ rotationSpeed = 1, ...props }: RotatingCubeProps) {

  const cubeRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if(!cubeRef.current) return;
    cubeRef.current.rotation.y += delta * rotationSpeed;
  });

  return (
    <Cube ref={cubeRef} {...props} />
  );
};
