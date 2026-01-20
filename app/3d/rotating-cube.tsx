import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import type { Mesh } from "three";

import { PurpleCube, type PurpleCubeProps } from "~/3d/cube";

type RotatingCubeProps = Readonly<PurpleCubeProps & {
  rotationSpeed?: number;
}>

export default function RotatingCube({ rotationSpeed = 1, ...props }: RotatingCubeProps) {

  const cubeRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if(!cubeRef.current) return;
    cubeRef.current.rotation.y += delta * rotationSpeed;
  });

  return (
    <PurpleCube ref={cubeRef} {...props} />
  );
};
