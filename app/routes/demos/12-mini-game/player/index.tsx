import { useTexture } from "@react-three/drei";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef } from "react";


import useGame from "../use-game";

import { CHARACTER_IDS } from "./player-types";
import { useCameraFollow } from "./use-camera-follow";
import { usePlayerControls } from "./use-player-controls";
import { usePlayerPhaseSync } from "./use-player-phase-sync";

import { Sphere } from "~/3d/sphere";

CHARACTER_IDS.forEach((id) =>
  useTexture.preload(`/models/player/${id}/base-color.png`)
);

export default function Player() {
  const playerRef = useRef<RapierRigidBody>(null);
  const selectedCharacterIndex = useGame((state) => state.selectedCharacterIndex);
  const characterId = CHARACTER_IDS[selectedCharacterIndex];
  const texture = useTexture(`/models/player/${characterId}/base-color.png`);

  usePlayerControls(playerRef);
  useCameraFollow(playerRef);
  usePlayerPhaseSync(playerRef);

  return (
    <RigidBody
      ref={playerRef}
      colliders="ball"
      canSleep={false}
      position={[0, 1, 0]}
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <Sphere castShadow scale={0.3}>
        <meshStandardMaterial map={texture} />
      </Sphere>
    </RigidBody>
  );
}
