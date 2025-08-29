import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import Cube from "~/3d/cube";

export default function RotatingCube() {

  const cubeRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if(!cubeRef.current) return;
    cubeRef.current.rotation.y += delta;
  });

  return (
    <Cube ref={cubeRef} />
  );
};
