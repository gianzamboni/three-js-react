import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function RedCube() {

  const cubeRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={cubeRef} scale={1.5} position-x={2} rotation-y={Math.PI * 0.25}>
      <boxGeometry />
      <meshBasicMaterial color="mediumpurple" />
    </mesh>
  );
};
