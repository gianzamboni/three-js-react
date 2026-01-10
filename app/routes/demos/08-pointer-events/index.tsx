import { Bvh } from "@react-three/drei";

import MainScene from "./main-scene";

import type { Route } from "./+types/index";

import { TestCanvas } from "~/3d/test-canvas";

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