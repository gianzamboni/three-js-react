import { Canvas } from "@react-three/fiber";
import type { Route } from "../+types/debug-ui";
import MainScene from "./main-scene";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "Leva Debug UI" },
      { name: "description", content: "Leva Debug UI" },
    ];
  }
  

export default function DebugUI() {
    return   <Canvas
    camera={ {
        fov: 45,
        near: 0.1,
        far: 200,
        position: [ - 4, 3, 6 ]
    } }
>
    <MainScene />
</Canvas>;
}