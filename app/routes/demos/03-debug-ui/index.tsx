import MainScene from "./main-scene";

import type { Route } from "./+types/index";

import { TestCanvas } from "~/3d/test-canvas";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Leva Debug UI" },
    { name: "description", content: "Leva Debug UI" },
  ];
}


export default function DebugUI() {
  return(<TestCanvas>
    <MainScene />
  </TestCanvas>);
}