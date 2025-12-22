import MainScene from "./main-scene";
import type { Route } from "./+types/index";
import { TestCanvas } from "~/3d/test-canvas";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "First DREI Application" },
    { name: "description", content: "First DREI Application" },
  ];
}


export default function DreiApp() {
  return <TestCanvas>
    <MainScene />
  </TestCanvas>;
}