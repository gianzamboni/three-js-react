import { boxGeometry } from "../globals/geometries";
import { endsMaterial } from "../globals/materials";

import type { BlockProps } from "./block";

export default function BlockStart({ position = [0, 0, 0] }: BlockProps) {
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

