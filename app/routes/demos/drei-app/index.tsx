import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import MainScene from "./main-scene";
import type { Route } from "../+types/drei-app";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "First DREI Application" },
    { name: "description", content: "First DREI Application" },
  ];
}


export default function DreiApp() {

  const cameraSettings = useMemo(() => ({
        fov: 45,
        near: 0.1,
        far: 200,
        position: [ - 4, 3, 6 ]
    }), []);

  return <Canvas camera={cameraSettings}>
    <MainScene />
  </Canvas>;
}