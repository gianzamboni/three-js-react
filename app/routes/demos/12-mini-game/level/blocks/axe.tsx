import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";

import { boxGeometry } from "../globals/geometries";
import { obstacleMaterial, trapBlockMaterial } from "../globals/materials";

import type { BlockProps } from "./block";

export default function BlockAxe({ position = [0, 0, 0] }: BlockProps) {

  const [ offset ] = useState(() => Math.random() * Math.PI * 2);
  
  const obstacleRef = useRef<RapierRigidBody>(null);
  
  useFrame((state) => {
    if (!obstacleRef.current) return;
    const time = state.clock.getElapsedTime()

    const x = Math.sin(time + offset) * 1.25;
    obstacleRef.current.setNextKinematicTranslation({ x, y: position[1] + 0.75, z: position[2] })
  });
  
  return <group position={position}>  
    <mesh 
      receiveShadow 
      scale={[4, 0.2, 4]} 
      geometry={boxGeometry}
      material={trapBlockMaterial}
    >
    </mesh>
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
        scale={ [ 1.5, 1.5, 0.3 ] }
      />
    </RigidBody>
  </group>
}