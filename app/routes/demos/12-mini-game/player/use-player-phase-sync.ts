import { useFrame } from "@react-three/fiber";
import { useEffect, type RefObject } from "react";

import { BLOCK_LENGTH } from "../level/globals/constants";
import useGame from "../use-game";

import type { RapierRigidBody } from "@react-three/rapier";

export function usePlayerPhaseSync(playerRef: RefObject<RapierRigidBody | null>) {
  const end = useGame((state) => state.end);
  const restart = useGame((state) => state.restart);
  const blocksCount = useGame((state) => state.blocksCount);

  useFrame(() => {
    if (!playerRef.current) return;
    const position = playerRef.current.translation();

    if (position.z < -(blocksCount * BLOCK_LENGTH + 2)) {
      end();
    }

    if (position.y < -4) {
      restart();
    }
  })

  const resetBall = () => {
    if (!playerRef.current) return;
    playerRef.current.setTranslation({ x: 0, y: 1, z: 0 }, true)
    playerRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true)
    playerRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true)
  }

  useEffect(() => {
    const unsubscribe = useGame.subscribe(
      (state) => state.phase,
      (phase) => {
        if (phase === "ready") {
          resetBall();
        }
      }
    );
    return () => unsubscribe();
  }, []);
}