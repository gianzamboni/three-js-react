import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

import { useCameraFollow } from "./use-camera-follow";
import { usePlayerControls } from "./use-player-controls";

export default function Player() {
  const playerRef = useRef<RapierRigidBody>(null);

  usePlayerControls(playerRef);
  useCameraFollow(playerRef);

  return <RigidBody
    ref={playerRef}
    colliders="ball"
    canSleep={false}
    position={[0, 1, 0]}
    restitution={0.2}
    friction={1}
    linearDamping={0.5}
    angularDamping={0.5}
  >
    <mesh castShadow>
      <icosahedronGeometry args={[0.3, 1]} />
      <meshStandardMaterial
        color="mediumpurple"
        flatShading
      />
    </mesh>
  </RigidBody>;
}
