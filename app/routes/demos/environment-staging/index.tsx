import { Canvas } from "@react-three/fiber";
import MainScene from "./main-scene";
import type { Route } from "../+types/environment-staging";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Environment and Staging" },
    { name: "description", content: "Environment and Staging" },
  ];
}

export default function EnvironmentStaging() {
  return  <Canvas
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