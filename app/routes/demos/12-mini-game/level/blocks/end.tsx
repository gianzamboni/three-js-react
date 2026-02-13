import { RigidBody } from "@react-three/rapier";

import { boxGeometry } from "../globals/geometries";
import { endsMaterial } from "../globals/materials";

import type { BlockProps } from "./block";

import Hamburger from "~/3d/hamburger";

export default function BlockEnd({ position = [0, 0, 0] }: BlockProps) {
  return <group position={position}>
    <mesh
      receiveShadow
      scale={[4, 0.2, 4]}
      geometry={boxGeometry}
      material={endsMaterial}
      position={[0, 0.1, 0]}
    >
    </mesh>
    <RigidBody 
      type="fixed" 
      colliders="hull"
      restitution={0.2}
      friction={0}
      position={[0, 0.25, 0]}
    >
      <Hamburger scale={0.2} castShadow />
    </RigidBody>
  </group>
}