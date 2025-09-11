import type { Route } from "../+types/home";
import { SketchedTitle } from "~/sketched-components/title";
import styles from "./styles.module.css";
import { SketchedCard } from "~/sketched-components/card";
import DEMOS from "./demo-list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Three JS Journey | Gianfranco Zamboni" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return (
    <div className="p-2 col">
      <SketchedTitle>React Three Fiber Demos</SketchedTitle>
      <div className={styles['demo-grid']}>
        {DEMOS.map((demo) => (
          <SketchedCard key={demo.id} {...demo} />
        ))}
      </div>
    </div>
  );
}
