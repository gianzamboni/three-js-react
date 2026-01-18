import {
  ContactShadows,
  Environment,
  PresentationControls,
  Text,
} from "@react-three/drei";
import { Perf } from "r3f-perf";

import { AnimatedFloat } from "./components/animated-float";
import { CameraController } from "./components/camera-controller";
import { Computer } from "./components/computer";


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
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#ffffff"
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
            <Computer />
          <Text
            font="/fonts/bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2.4, 0.75, 1]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
            color={"#ffffff"}
          >
            Gianfranco Zamboni
          </Text>
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