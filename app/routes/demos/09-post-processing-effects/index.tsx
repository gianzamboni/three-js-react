import { TestCanvas } from "~/3d/test-canvas";
import type { Route } from "./+types/index";
import MainScene from "./main-scene";

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