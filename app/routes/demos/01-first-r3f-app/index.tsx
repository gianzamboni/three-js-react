import type { Route } from "./+types/index";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { extend } from "@react-three/fiber";
import MainScene from "./main-scene";
import { TestCanvas } from "~/3d/test-canvas";

extend({ OrbitControls });

export function meta(_: Route.MetaArgs) {
  return [
    { title: "First R3F Application" },
    { name: "description", content: "First R3F Application" },
  ];
}

export default function FirstR3fApplication() {
  return <TestCanvas>
    <MainScene />
  </TestCanvas>;
};