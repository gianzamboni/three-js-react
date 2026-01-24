import {
  ContactShadows,
  Environment,
  PerformanceMonitor,
  PresentationControls,
  type PerformanceMonitorApi,
} from "@react-three/drei";
import { useState } from "react";

import { AnimatedFloat } from "./components/animated-float";
import { CameraController } from "./components/camera-controller";
import { Computer } from "./components/computer";
import { NameText } from "./components/name-text";

import SketchySuspense from "~/sketched-components/sketchy-suspense";
import ToggablePerfPanel from "~/utils/toggable-perf-panel";

export default function MainScene() {

  const [highQuality, setHighQuality] = useState(true);

  const handleFPSChange = (api: PerformanceMonitorApi) => {
    if(api.fps < 30 && highQuality) {
      setHighQuality(false);
    }
  };

  return (
    <>
      <PerformanceMonitor onDecline={handleFPSChange} />
      <Environment preset="city" />
      <color args={["#241a1a"]} attach="background" />
      <CameraController />
      <ToggablePerfPanel />

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
          <Computer emitLight={highQuality} />
          <NameText />
        </AnimatedFloat>
      </SketchySuspense>
      </PresentationControls>
      { highQuality && <ContactShadows
        position-y={-1.4}
        opacity={0.4}
        blur={2.4}
        scale={5}
      />}
    </>
  );
}