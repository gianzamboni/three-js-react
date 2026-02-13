import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";

import { boxGeometry } from "../globals/geometries";
import { obstacleMaterial } from "../globals/materials";

import BlockBase, { type BlockProps } from "./base-block";

import type { RapierRigidBody } from "@react-three/rapier";


export default function BlockLimbo({ position = [0, 0, 0] }: BlockProps) {

  const [ offset ] = useState(() => Math.random() * Math.PI * 2);
  
  const obstacleRef = useRef<RapierRigidBody>(null);
  
  useFrame((state) => {
    if (!obstacleRef.current) return;
    const time = state.clock.getElapsedTime();

    const y = Math.sin(time + offset) + 1.25;
    obstacleRef.current.setNextKinematicTranslation({ x: position[0], y, z: position[2] });
  });
  
  return (
    <BlockBase position={position}>
      <RigidBody 
        ref={obstacleRef}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh 
          receiveShadow 
          castShadow
          geometry={boxGeometry} 
          material={obstacleMaterial} 
          scale={[3.5, 0.3, 0.3]}
        />
      </RigidBody>
    </BlockBase>
  );
}
