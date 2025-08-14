import { Canvas, type CameraProps } from "@react-three/fiber";
import MainScene from "~/first-r3f-application/main-scene";
import type { Route } from "./+types/first-r3f-app";
import { ACESFilmicToneMapping, CineonToneMapping, LinearSRGBColorSpace } from "three";
import { useMemo } from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "First R3F Application" },
    { name: "description", content: "First R3F Application" },
  ];
}

export default function FirstR3fApplication() {

  const cameraSettings: CameraProps = useMemo(() => ({
    far: 200, 
    fov: 45, 
    near: 0.1, 
    position: [ 3, 2, 6 ],
  }), []);

  return <main className="w-full h-full">
    <Canvas 
      camera={cameraSettings}
    >
      <MainScene />
    </Canvas>
  </main>;
};