import { extend } from "@react-three/fiber";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import MainScene from "./main-scene";

import type { Route } from "./+types/index";

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