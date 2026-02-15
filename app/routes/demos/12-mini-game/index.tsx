import { KeyboardControls } from "@react-three/drei";

import { Interface } from "./interface";
import MainScene from "./main-scene";

import type { Route } from "./+types/index";

import { TestCanvas } from "~/3d/test-canvas";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Mini Game" },
    { name: "description", content: "Mini Game" },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",
  },
];

const MINI_GAME_CONTROLS = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
];

export default function MiniGame() {
  return <KeyboardControls map={MINI_GAME_CONTROLS}>  
    <TestCanvas shadows position={{320: [2.5, 4, 6]}}>
      <MainScene />
    </TestCanvas>
    <Interface />
  </KeyboardControls>
}
