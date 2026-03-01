import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

import useGame from "./use-game";

export function useLoadingPhase() {
  const { active, total } = useProgress();
  const setReady = useGame((state) => state.setReady);

  useEffect(() => {
    if (!active && total > 0) {
      setReady();
    }
  }, [active, total, setReady]);
}
