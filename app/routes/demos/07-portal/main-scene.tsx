import { OrbitControls } from "@react-three/drei";
import Portal from "./portal";

export default function MainScene() {
  return <>
    <color attach="background" args={["#080712"]} />
    <OrbitControls makeDefault />

    <Portal />

  </>;
}