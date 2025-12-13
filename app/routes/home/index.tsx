import type { Route } from "./+types/index";
import { SketchedTitle } from "~/sketched-components/title";
import styles from "./styles.module.css";
import { SketchedCard } from "~/sketched-components/card";
import DEMOS from "./demo-list";
import { useScrollMemory } from "~/utils/useScrollMemory";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Three JS Journey | Gianfranco Zamboni" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  useScrollMemory();
  
  return (
    <div className={`col ${styles['home-container']}`}>
      <SketchedTitle>React Three Fiber Demos</SketchedTitle>
      <p>This are the demos made for Three JS Journey Last Chapter where I learned to integrate Three JS with React.</p>
      <div className={styles['demo-grid']}>
        {DEMOS.map((demo) => (
          <SketchedCard key={demo.id} {...demo} />
        ))}
        <SketchedCard
          key="3d-text"
          targetBlank
          link="https://three.gianfrancozamboni.com.ar/"
          title="Three JS Journey without React"
          description="This are the demos made for the Three JS Journey Course before reaching the React Three Fiber Chapter."
          thumbnail="demos/threejs.jpg"
          className={styles['two-columns-item']}
        />
      </div>
    </div>
  );
}
