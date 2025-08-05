import type { Route } from "./+types/home";
import { Canvas } from "@react-three/fiber";
import Cube from "../first-r3f-application/cube";
import Sphere from "~/first-r3f-application/sphere";
import Floor from "~/first-r3f-application/floor";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TBD" },
    { name: "description", content: "TBD" },
  ];
}

export default function Tbd() {
  return <main className="full-screen">
    <Canvas>
      <Cube />
      <Sphere />
      <Floor />
    </Canvas>
  </main>;
};