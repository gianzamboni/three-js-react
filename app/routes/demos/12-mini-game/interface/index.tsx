import { useKeyboardControls } from "@react-three/drei";
import styles from "./styles.module.css";
export function Interface() {

  const forward = useKeyboardControls((state) => state.forward)
  const backward = useKeyboardControls((state) => state.backward)
  const leftward = useKeyboardControls((state) => state.leftward)
  const rightward = useKeyboardControls((state) => state.rightward)
  const jump = useKeyboardControls((state) => state.jump)

  return <div className={styles.interface}>
    <div className={styles.time}>00:00</div>
    <div className={styles.restart}>Restart</div>
    <div className={styles.controls}>
        <div className={styles.raw}>
            <div className={`${styles.key} ${forward ? styles.active : ""}`}></div>
        </div>
        <div className={styles.raw}>
            <div className={`${styles.key} ${leftward ? styles.active : ""}`}></div>
            <div className={`${styles.key} ${backward ? styles.active : ""}`}></div>
            <div className={`${styles.key} ${rightward ? styles.active : ""}`}></div>
        </div>
        <div className={styles.raw}>
          <div className={`${styles.key} ${styles.large} ${jump ? styles.active : ""}`}></div>
        </div>
    </div>
  </div>;
}