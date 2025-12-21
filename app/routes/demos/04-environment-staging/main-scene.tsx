import { useHelper, OrbitControls,  Stage } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Sphere from "~/3d/sphere";
import { useEffect, useRef, type RefObject } from "react";
import { DirectionalLightHelper, Object3D, type DirectionalLight } from "three";
import { useControls } from "leva";
import { useThree } from "@react-three/fiber";
import RotatingCube from "~/3d/rotating-cube";

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
    <Perf position="bottom-right" />
    <OrbitControls makeDefault />

    <Stage
      shadows={ { type: 'contact', opacity: 0.2, blur: 3 } }
      environment="sunset"
      preset="upfront"
      intensity={envMapIntensity}
    >
      <Sphere position-y={1} color="orange" position-x={-2} castShadow />
      <RotatingCube position-y={1} rotationSpeed={0.2} scale={1.5} position-x={2} castShadow >
        <meshStandardMaterial color="mediumpurple" />
      </RotatingCube>
    </Stage>
  </>;
}