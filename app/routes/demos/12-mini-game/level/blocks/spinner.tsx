import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { Euler, Quaternion } from "three";

import { boxGeometry } from "../globals/geometries";
import { obstacleMaterial, trapBlockMaterial } from "../globals/materials";

import type { BlockProps } from "./block";

export default function BlockSpinner({ position = [0, 0, 0] }: BlockProps) {

  const [ speed ] = useState(() => (Math.random() + 0.2) * (Math.random() < 0.5 ? - 1 : 1));
  
  const obstacleRef = useRef<RapierRigidBody>(null);
  
  useFrame((state) => {
    if (!obstacleRef.current) return;
    const time = state.clock.getElapsedTime()

    const rotation = new Quaternion()
    rotation.setFromEuler(new Euler(0, time * speed, 0))
    obstacleRef.current.setNextKinematicRotation(rotation)
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
        scale={[3.5, 0.3, 0.3]} 
      />
    </RigidBody>
  </group>
}