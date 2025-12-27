import DEMOS from "./demo-list";
import styles from "./styles.module.css";

import type { Route } from "./+types/index";

import { SketchedCard } from "~/sketched-components/card";
import { SketchyH1 } from "~/sketched-components/title/h1";
import { useScrollMemory } from "~/utils/use-scroll-memory";

export function meta( _: Route.MetaArgs) {
  return [
    { title: "Three JS Journey | Gianfranco Zamboni" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  useScrollMemory();
  
  return (
    <div className={`col align-items-center ${styles['home-container']}`}>
      <div className="align-items-center">
        <SketchyH1>React Three Fiber Demos</SketchyH1>
        <h2>by <a href="https://www.linkedin.com/in/gianfranco-zamboni/" target="_blank">Gianfranco Zamboni</a></h2>
      </div>
     <p>A set of demos I made to practice for the last chapter of Three JS Journey where I learned to integrate Three JS with React.</p>
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
