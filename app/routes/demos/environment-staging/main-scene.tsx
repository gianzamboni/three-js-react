import { useHelper, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Floor from "~/3d/floor";
import RotatingCube from "~/routes/demos/first-r3f-app/rotating-cube";
import Sphere from "~/3d/sphere";
import { useRef, type RefObject } from "react";
import { DirectionalLightHelper, type DirectionalLight } from "three";

export default function MainScene() {

  const directionalLightRef = useRef<DirectionalLight>(null);

  useHelper(directionalLightRef as RefObject<DirectionalLight>, DirectionalLightHelper, 1);

  return <>
    <Perf position="top-bottom" />

    <OrbitControls makeDefault />

    <directionalLight
      ref={directionalLightRef}
      position={[1, 2, 3]}
      intensity={4.5}
      castShadow
    />
    <ambientLight intensity={1.5} />

    <Sphere color="orange" position-x={-2} castShadow />
    <RotatingCube rotationSpeed={0.2} castShadow />

    <Floor receiveShadow>
      <meshStandardMaterial color="greenyellow" />
    </Floor>

  </>;
}