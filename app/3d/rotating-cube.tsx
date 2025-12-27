import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import type { Mesh } from "three";
import type { MeshProps } from "~/3d/types";

import Cube from "~/3d/cube";

type RotatingCubeProps = MeshProps & {
  rotationSpeed?: number;
}

export default function RotatingCube({ rotationSpeed = 1, ...props }: RotatingCubeProps) {

  const cubeRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if(!cubeRef.current) return;
    cubeRef.current.rotation.y += delta * rotationSpeed;
  });

  return (
    <Cube ref={cubeRef} {...props} />
  );
};
