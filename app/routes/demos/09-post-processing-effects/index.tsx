import MainScene from "./main-scene";

import type { Route } from "./+types/index";

import { TestCanvas } from "~/3d/test-canvas";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Post Processing Effects" },
    { name: "description", content: "Post Processing Effects" },
  ];
}

export default function PostProcessingEffects() {
  return <TestCanvas shadows>
        <MainScene />
    </TestCanvas>;;
}