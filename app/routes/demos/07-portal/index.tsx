import MainScene from "./main-scene";

import type { Route } from "./+types/index";

import { TestCanvas } from "~/3d/test-canvas";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Portal Scene" },
    { name: "description", content: "Portal Scene" },
  ];
}

export default function FirstR3fApplication() {
  return <TestCanvas flat>
    <MainScene />
  </TestCanvas>;
};