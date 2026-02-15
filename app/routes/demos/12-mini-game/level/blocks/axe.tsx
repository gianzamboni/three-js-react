import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

import BlockBase, { type BlockProps } from "./base-block";
import Obstacle from "./obstacle";

import type { RapierRigidBody } from "@react-three/rapier";

export default function BlockAxe({ position = [0, 0, 0] }: BlockProps) {

  const [ offset ] = useState(() => Math.random() * Math.PI * 2);
  
  const obstacleRef = useRef<RapierRigidBody>(null);
  
  useFrame((state) => {
    if (!obstacleRef.current) return;
    const time = state.clock.getElapsedTime();

    const x = Math.sin(time + offset) * 1.25;
    obstacleRef.current.setNextKinematicTranslation({ x, y: position[1] + 0.75, z: position[2] });
  });
  
  return (
    <BlockBase position={position}>
      <Obstacle ref={obstacleRef} scale={[1.5, 1.5, 0.3]} />
    </BlockBase>
  );
}
