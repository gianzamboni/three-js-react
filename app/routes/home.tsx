import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Three React Fiber Demos" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Three React Fiber Demos</h1>
      <Link to="/first-three-js-app">First Three JS App</Link>
    </div>
  );
}
