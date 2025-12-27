import MainScene from "./main-scene";

import type { Route } from "./+types/index";

import { TestCanvas } from "~/3d/test-canvas";


export function meta(_: Route.MetaArgs) {
  return [
    { title: "Loading Models" },
    { name: "description", content: "Loading Models" },
  ];
}

export default function FirstR3fApplication() {
  return <TestCanvas shadows>
    <MainScene />
  </TestCanvas>;
};