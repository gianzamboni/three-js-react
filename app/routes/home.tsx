import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Three JS Journey | Gianfranco Zamboni" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="p-12 ">
      <h1 className="text-2xl font-bold">Three React Fiber Demos</h1>
      <Link to="/demos/first-r3f-app">First Three JS App</Link>
    </div>
  );
}
