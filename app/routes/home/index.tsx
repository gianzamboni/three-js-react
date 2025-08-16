import { Link } from "react-router";
import type { Route } from "../+types/home";
import { useMemo } from "react";
import { DemoCard } from "~/home/demo-card";

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
    <div className="p-12">
      <h1 className="title">React Three Fiber Demos</h1>
      <div className="flex flex-wrap gap-4">
        {demos.map((demo) => (
          <DemoCard key={demo.title} demo={demo} />
        ))}
      </div>
    </div>
  );
}
