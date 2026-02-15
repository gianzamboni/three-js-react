import { Text } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { endsMaterial } from "../globals/materials";

import BlockBase from "./base-block";

import type { BlockProps } from "./base-block";

import Hamburger from "~/3d/hamburger";

export default function BlockEnd({ position = [0, 0, 0] }: BlockProps) {
  return (
    <BlockBase position={position} material={endsMaterial} platformPosition={[0, 0.1, 0]}>
       <Text
            font="/fonts/bebas-neue-v9-latin-regular.woff"
            scale={ 1 }
            position={ [ 0, 2.25, 2 ] }
        >
            FINISH
            <meshBasicMaterial toneMapped={ false } />
      </Text>
      <RigidBody 
        type="fixed" 
        colliders="hull"
        restitution={0.2}
        friction={0}
        position={[0, 0.25, 0]}
      >
        <Hamburger scale={0.2} castShadow />
      </RigidBody>
    </BlockBase>
  );
}
