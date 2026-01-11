import { OrbitControls } from "@react-three/drei";

import Cube from "~/3d/cube";

export default function MainScene() {

  return <>
    <OrbitControls makeDefault />

    <Cube>
      <meshNormalMaterial />
    </Cube>
  </>
}