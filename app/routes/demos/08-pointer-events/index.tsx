import { Bvh } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import MainScene from "./main-scene";

import type { Route } from "./+types/index";

import { TestCanvas } from "~/3d/test-canvas";



extend({ OrbitControls });

export function meta( _: Route.MetaArgs) {
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