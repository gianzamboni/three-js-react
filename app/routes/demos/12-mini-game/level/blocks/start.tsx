import { Float, Text } from "@react-three/drei";

import { endsMaterial } from "../globals/materials";

import BlockBase from "./base-block";

import type { BlockProps } from "./base-block";

export default function BlockStart({ position = [0, 0, 0] }: BlockProps) {
  return <BlockBase position={position} material={endsMaterial}>
    <Float floatIntensity={0.25} rotationIntensity={0.25} >
      <Text
       scale={0.5}
       font="/fonts/bebas-neue-v9-latin-regular.woff"
       maxWidth={0.25}
       lineHeight={0.75}
       textAlign="right"
       position={[0.75,0.65,0]}
       rotation-y={-0.25}>
        <meshBasicMaterial toneMapped={false} />
        Marble Race
      </Text>
    </Float>
    </BlockBase>;
}
