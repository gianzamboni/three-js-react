import { useCallback } from "react";

import { CHARACTER_IDS } from "../../player/player-types";
import useGame from "../../use-game";

import styles from "./styles.module.css";
import { useIntroKeyboard } from "./use-intro-keyboard";

export function IntroScreen() {
  
  useIntroKeyboard();

  const phase = useGame((state) => state.phase);
  const selectedCharacterIndex = useGame((state) => state.selectedCharacterIndex);
  const setSelectedCharacterIndex = useGame((state) => state.setSelectedCharacterIndex);
  const start = useGame((state) => state.start);

  const handleCharacterSelect = useCallback((index: number) => {
    const phase = useGame.getState().phase;
    if (phase === "ready") {
      setSelectedCharacterIndex(index);
    }
  }, [setSelectedCharacterIndex]);

  const handlePlay = useCallback(() => {
    const phase = useGame.getState().phase;
    if (phase === "ready") {
      start();
    }
  }, [start]);

  return (
    <div className={styles.introOverlay}>
      <div className={styles.introContent}>
        <h1 className={styles.introTitle}>
          You are a marble and you are hungry. 
          Can you reach the burger at the end of the trail?
        </h1>
        <h2 className={styles.introSubtitle}>Pick your character</h2>
        <div className={styles.characterRow}>
          {CHARACTER_IDS.map((characterId, index) => (
            <button
              key={characterId}
              className={`${styles.characterButton} ${selectedCharacterIndex === index ? styles.selected : ""}`}
              onClick={() => handleCharacterSelect(index)}
              disabled={phase === "loading"}
            >
              <img
                src={`/models/player/${characterId}/base-color.png`}
                alt={characterId}
                className={styles.characterPreview}
              />
            </button>
          ))}
        </div>
        <button
          className={styles.playButton}
          onClick={handlePlay}
          disabled={phase === "loading"}
        >
          {phase === "loading" ? "Loading…" : "Play"}
        </button>
      </div>
    </div>
  );
}
