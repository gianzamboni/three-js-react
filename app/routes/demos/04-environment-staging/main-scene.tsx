import { useHelper, OrbitControls, Stage } from "@react-three/drei";
import { useControls } from "leva";
import { useRef, type RefObject } from "react";
import { DirectionalLightHelper, type DirectionalLight } from "three";

import RotatingCube from "~/3d/rotating-cube";
import { OrangeSphere } from "~/3d/sphere";
import ToggablePerfPanel from "~/utils/toggable-perf-panel";

export default function MainScene() {

  const { envMapIntensity } = useControls('Environment Map', {
    envMapIntensity: {
      label: "Intensity",
      value: 7, min: 0, max: 12
    },
  })

  const directionalLightRef = useRef<DirectionalLight>(null);

  useHelper(directionalLightRef as RefObject<DirectionalLight>, DirectionalLightHelper, 1);

  return <>
    <ToggablePerfPanel />
    <OrbitControls makeDefault />

    <Stage
      shadows={{ type: 'contact', opacity: 0.2, blur: 3 }}
      environment="sunset"
      preset="upfront"
      intensity={envMapIntensity}
    >
      <OrangeSphere position-y={1} color="orange" castShadow />
      <RotatingCube position-y={1} rotationSpeed={0.2} scale={1.5} position-x={2} castShadow >
        <meshStandardMaterial color="mediumpurple" />
      </RotatingCube>
    </Stage>
  </>;
}