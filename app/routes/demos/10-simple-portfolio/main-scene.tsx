import {
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";

import { AnimatedFloat } from "./components/animated-float";
import { CameraController } from "./components/camera-controller";
import { Computer } from "./components/computer";
import { NameText } from "./components/name-text";

import SketchySuspense from "~/sketched-components/sketchy-suspense";

export default function MainScene() {
  return (
    <>
      <Environment preset="city" />
      <color args={["#241a1a"]} attach="background" />
      <Perf position="top-right" />
      <CameraController />

      <PresentationControls
        global
        rotation={[0.12, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        damping={0.1}
        snap
      >
      <SketchySuspense>
        <AnimatedFloat>
          <Computer />
          <NameText />
        </AnimatedFloat>
      </SketchySuspense>
      </PresentationControls>
      <ContactShadows
        position-y={-1.4}
        opacity={0.4}
        blur={2.4}
        scale={5}
      />
    </>
  );
}