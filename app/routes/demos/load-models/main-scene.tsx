import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Cube from "~/3d/cube";
import Floor from "~/3d/floor";
import Sphere from "~/3d/sphere";

export default function MainScene() {
  return <>
    <Perf position="bottom-right" />
    <OrbitControls makeDefault />

    <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
    <ambientLight intensity={ 1.5 } />

    <Floor position-y={-1} rotation-x={-Math.PI * 0.5} scale={10} receiveShadow >
      <meshStandardMaterial color="greenyellow" />
    </Floor>

  </>;
}