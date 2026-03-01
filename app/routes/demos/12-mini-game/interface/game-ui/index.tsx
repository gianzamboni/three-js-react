import { useKeyboardControls } from "@react-three/drei";
import { addEffect } from "@react-three/fiber";
import { useEffect, useRef, type RefObject } from "react";

import useGame from "../../use-game";
import styles from "../styles.module.css";

function updateTimer(timeRef: RefObject<HTMLDivElement | null>) {
  const state = useGame.getState();

  let elapsedTime = 0;

  if (state.phase === "playing") {
    elapsedTime = Date.now() - state.startTime;
  } else if (state.phase === "ended") {
    elapsedTime = state.endTime - state.startTime;
  }

  elapsedTime /= 1000;
  const parsedElapsedTime = elapsedTime.toFixed(2);

  if (timeRef.current) {
    timeRef.current.textContent = parsedElapsedTime;
  }
}

export default function GameUI() {
  const timeRef = useRef<HTMLDivElement>(null);

  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  const phase = useGame((state) => state.phase);
  const restart = useGame((state) => state.restart);

  useEffect(() => {
    const unsubscribe = addEffect(() => updateTimer(timeRef));
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div ref={timeRef} className={styles.time}>0.00</div>
      {phase === "ended" && (
        <button className={styles.restart} onClick={restart}>
          Restart
        </button>
      )}
      <div className={styles.controls}>
        <div className={styles.row}>
          <div className={`${styles.key} ${forward ? styles.active : ""}`} />
        </div>
        <div className={styles.row}>
          <div className={`${styles.key} ${leftward ? styles.active : ""}`} />
          <div className={`${styles.key} ${backward ? styles.active : ""}`} />
          <div className={`${styles.key} ${rightward ? styles.active : ""}`} />
        </div>
        <div className={styles.row}>
          <div className={`${styles.key} ${styles.large} ${jump ? styles.active : ""}`} />
        </div>
      </div>
    </>
  );
}
