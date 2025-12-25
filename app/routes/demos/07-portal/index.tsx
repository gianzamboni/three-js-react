import type { Route } from "./+types/index";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { extend } from "@react-three/fiber";
import { TestCanvas } from "~/3d/test-canvas";
import MainScene from "./main-scene";

extend({ OrbitControls });

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portal Scene" },
    { name: "description", content: "Portal Scene" },
  ];
}

export default function FirstR3fApplication() {
  return <TestCanvas shadows flat>
    <MainScene />
  </TestCanvas>;
};