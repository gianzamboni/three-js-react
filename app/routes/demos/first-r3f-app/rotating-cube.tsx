import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import Cube from "~/3d/cube";

type RotatingCubeProps = {
  rotationSpeed?: number;
}

export default function RotatingCube({ rotationSpeed = 1 }: RotatingCubeProps) {

  const cubeRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if(!cubeRef.current) return;
    cubeRef.current.rotation.y += delta * rotationSpeed;
  });

  return (
    <Cube ref={cubeRef} />
  );
};
