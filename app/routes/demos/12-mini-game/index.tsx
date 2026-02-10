import MainScene from "./main-scene";

import type { Route } from "./+types/index";

import { TestCanvas } from "~/3d/test-canvas";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Mini Game" },
    { name: "description", content: "Mini Game" },
  ];
}

export default function MiniGame() {
  return <TestCanvas shadows position={{320: [2.5, 4, 6]}}>
    <MainScene />
  </TestCanvas>;
}
