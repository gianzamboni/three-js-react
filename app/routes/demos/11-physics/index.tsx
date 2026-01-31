import { TestCanvas } from "~/3d/test-canvas";
import MainScene from "./main-scene";

export function meta() {
  return [
    { title: "Physics" },
    { name: "description", content: "Physics" },
  ];
}

export default function Physics() {
  return <TestCanvas shadows>
    <MainScene />
  </TestCanvas>;
}