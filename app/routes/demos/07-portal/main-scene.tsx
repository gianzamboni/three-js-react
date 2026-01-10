import { Sparkles } from "@react-three/drei";

import Portal from "./portal";

import BasicSetup from "~/3d/basic-setup";
import SketchySuspense from "~/sketched-components/sketchy-suspense";

export default function MainScene() {
  return <>
    <BasicSetup withoutLights hidePerfPanel />
    <color attach="background" args={["#080712"]} />

    <SketchySuspense>
      <Portal />
    </SketchySuspense>
    <Sparkles
      size={6}
      scale={[4, 1, 4]}
      position-y={-0.5}
      speed={0.2}
      count={30}
    />
  </>;
}