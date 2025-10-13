import type { Route } from "./+types/index";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { extend } from "@react-three/fiber";
import { TestCanvas } from "~/3d/test-canvas";
import MainScene from "./main-scene";
import { Bvh } from "@react-three/drei";

extend({ OrbitControls });

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pointer Events" },
    { name: "description", content: "Pointer Events" },
  ];
}

export default function PointerEvents() {
  return <TestCanvas shadows>
    <Bvh>
      <MainScene />
    </Bvh>
  </TestCanvas>;
};