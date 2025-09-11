import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Cube from "~/3d/cube";

export default function MainScene() {
  return <>
    <Perf position="bottom-right" />
    <OrbitControls makeDefault />
    <Cube />
  </>;
}