import type { Route } from "./+types/index";
import MainScene from "./main-scene";
import { TestCanvas } from "~/3d/test-canvas";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Leva Debug UI" },
    { name: "description", content: "Leva Debug UI" },
  ];
}


export default function DebugUI() {
  return(
  <>
    <TestCanvas>
      <MainScene />
    </TestCanvas>
  </>
  );
}