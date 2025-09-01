import { Canvas, type CameraProps } from "@react-three/fiber";
import MainScene from "./main-scene";
import type { Route } from "../+types/environment-staging";
import { useCallback, useMemo } from "react";
import type { RootState } from "@react-three/fiber";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Environment and Staging" },
    { name: "description", content: "Environment and Staging" },
  ];
}

export default function EnvironmentStaging() {

  const cameraSettings: CameraProps = useMemo(() => ({
    fov: 45,
    near: 0.1,
    far: 200,
    position: [ - 4, 3, 6 ]
  }), []);

  return  <Canvas 
    camera={cameraSettings}
  >
  <MainScene />
</Canvas>;
} 