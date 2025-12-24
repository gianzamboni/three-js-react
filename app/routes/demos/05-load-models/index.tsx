import type { Route } from "./+types/index";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { extend } from "@react-three/fiber";
import { TestCanvas } from "~/3d/test-canvas";
import MainScene from "./main-scene";

extend({ OrbitControls });

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Loading Models" },
    { name: "description", content: "Loading Models" },
  ];
}

export default function FirstR3fApplication() {
  return <TestCanvas shadows>
    <MainScene />
  </TestCanvas>;
};