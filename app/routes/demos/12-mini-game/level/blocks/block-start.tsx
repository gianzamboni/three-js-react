import { boxGeometry } from "../globals/geometries";
import { endsMaterial, obstacleMaterial } from "../globals/materials";

import type { BlockProps } from "./block";

export default function BlockStart({ position }: BlockProps) {
  return <group position={position}>  
    <mesh 
      receiveShadow 
      scale={[4, 0.2, 4]} 
      geometry={boxGeometry}
      material={endsMaterial}
    >
    </mesh>
  </group>
}