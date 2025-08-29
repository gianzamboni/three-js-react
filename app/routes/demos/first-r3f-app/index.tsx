import { Canvas, type CameraProps } from "@react-three/fiber";
import type { Route } from "../+types/first-r3f-app";
import { useMemo } from "react";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { extend } from "@react-three/fiber";
import MainScene from "./main-scene";

extend({ OrbitControls });

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
  
  return <Canvas camera={cameraSettings}>
    <MainScene />
  </Canvas>;
};