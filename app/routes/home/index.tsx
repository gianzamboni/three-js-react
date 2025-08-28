import type { Route } from "../+types/home";
import { useMemo } from "react";
import { SketchedTitle } from "~/sketched-components/title";
import styles from "./styles.module.css";
import { SketchedCard } from "~/sketched-components/card";

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
          id: "first-r3f-app",
          title: "First Three JS Fiber App",
          thumbnail: "demos/first-r3f-app.jpg",
          description: "This is my first Three JS Fiber App. It's the first steps to learn how to use Three JS Fiber after learning how to use Three JS on vanilla JS.",
          link: "demos/first-r3f-app",
        },
    ];
  }, []);

  return (
    <div className="p-2 col">
      <SketchedTitle>React Three Fiber Demos</SketchedTitle>
      <div className={styles.demoGrid}>
        {demos.map((demo) => (
          <SketchedCard key={demo.id} {...demo} />
        ))}
      </div>
    </div>
  );
}
