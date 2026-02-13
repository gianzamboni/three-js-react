import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Euler, Quaternion } from "three";

import BlockBase, { type BlockProps } from "./base-block";
import Obstacle from "./obstacle";

import type { RapierRigidBody } from "@react-three/rapier";

export default function BlockSpinner({ position = [0, 0, 0] }: BlockProps) {

  const [ speed ] = useState(() => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1));
  
  const obstacleRef = useRef<RapierRigidBody>(null);
  
  useFrame((state) => {
    if (!obstacleRef.current) return;
    const time = state.clock.getElapsedTime();

    const rotation = new Quaternion();
    rotation.setFromEuler(new Euler(0, time * speed, 0));
    obstacleRef.current.setNextKinematicRotation(rotation);
  });
  
  return (
    <BlockBase position={position}>
      <Obstacle ref={obstacleRef} scale={[3.5, 0.3, 0.3]} />
    </BlockBase>
  );
}
