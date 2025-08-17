import type { Route } from "../+types/home";
import { useMemo } from "react";
import { DemoCard } from "./components/demo-card";
import { SketchedTitle } from "~/sketched-components/sketched-title";
import styles from "./styles.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Three JS Journey | Gianfranco Zamboni" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const demos = useMemo(() => {
    return [
        {
          title: "First Three JS App",
          thumbnail: "/demos/first-r3f-app.jpg",
          description: "This is my first Three JS App",
          link: "/demos/first-r3f-app",
        },
    ];
  }, []);

  return (
    <div className="p-2">
      <SketchedTitle>React Three Fiber Demos</SketchedTitle>
      <div className={styles.demoGrid}>
        {demos.map((demo) => (
          <DemoCard key={demo.title} demo={demo} />
        ))}
      </div>
    </div>
  );
}
