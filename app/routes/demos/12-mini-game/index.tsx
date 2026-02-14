import { KeyboardControls } from "@react-three/drei";

import MainScene from "./main-scene";

import type { Route } from "./+types/index";

import { TestCanvas } from "~/3d/test-canvas";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Mini Game" },
    { name: "description", content: "Mini Game" },
  ];
}

const MINI_GAME_CONTROLS = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
];

export default function MiniGame() {
  return <TestCanvas shadows position={{320: [2.5, 4, 6]}}>
    <KeyboardControls map={MINI_GAME_CONTROLS}>
    <MainScene />
    </KeyboardControls>
  </TestCanvas>;
}
