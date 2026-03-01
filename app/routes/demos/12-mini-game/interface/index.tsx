import useGame from "../use-game";

import GameUI from "./game-ui";
import { IntroScreen } from "./intro";
import styles from "./styles.module.css";

export function Interface() {
  const phase = useGame((state) => state.phase);

  const showIntro = phase === "loading" || phase === "ready";

  return (
    <div className={styles.interface}>
      {showIntro ? <IntroScreen /> : <GameUI />}
    </div>
  );
}