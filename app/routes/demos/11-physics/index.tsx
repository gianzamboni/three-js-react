import MainScene from "./main-scene";

import { TestCanvas } from "~/3d/test-canvas";

export function meta() {
  return [
    { title: "Physics" },
    { name: "description", content: "Physics" },
  ];
}

export default function Physics() {
  return <TestCanvas shadows position={{
    320: [-32, 24, 48],
    1024: [-16, 12, 24],
  }}>
    <MainScene />
  </TestCanvas>;
}