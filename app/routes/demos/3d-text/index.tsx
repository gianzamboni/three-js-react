import MainScene from "./main-scene";
import type { Route } from "../+types/drei-app";
import { TestCanvas } from "~/3d/test-canvas";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "3D Text" },
    { name: "description", content: "3D Text" },
  ];
}

export default function ThreeDText() {
  return <TestCanvas>
    <MainScene />
  </TestCanvas>;
}