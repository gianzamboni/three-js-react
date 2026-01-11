import MainScene from "./main-scene";

import { TestCanvas } from "~/3d/test-canvas";

export function meta() {
  return [
    { title: "Simple Portfolio" },
    { name: "description", content: "Simple Portfolio" },
  ];
}

export default function SimplePortfolio() {
  return <TestCanvas>
    <MainScene />
  </TestCanvas>;
}