import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

import { CHARACTER_IDS } from "../../player/player-types";
import useGame from "../../use-game";

type NumberTransform = (index: number) => number;

export function useIntroKeyboard() {
  const [subscribe] = useKeyboardControls();

  useEffect(() => {
    const len = CHARACTER_IDS.length;

    const updateSelectedCharacterIndex = (transform: NumberTransform) => {
      const phase = useGame.getState().phase;
      if (phase === "ready") {
        const current = useGame.getState().selectedCharacterIndex;
        const nextIndex = transform(current);
        useGame.getState().setSelectedCharacterIndex(nextIndex);
      }
    };

    const unsubLeft = subscribe(
      (state) => state.leftward,
      (pressed) => {
        if (!pressed) return;
        updateSelectedCharacterIndex((index) => (index - 1 + len) % len);
      },
    );
    const unsubRight = subscribe(
      (state) => state.rightward,
      (pressed) => {
        if (!pressed) return;
        updateSelectedCharacterIndex((index) => (index + 1) % len);
      },
    );
    const unsubConfirm = subscribe(
      (state) => state.confirm,
      (pressed) => {
        if (!pressed || useGame.getState().phase !== "ready") return;
        useGame.getState().start();
      },
    );
    return () => {
      unsubLeft();
      unsubRight();
      unsubConfirm();
    };
  }, [subscribe]);
}
