import { OrbitControls, useGLTF } from "@react-three/drei";

import Cube from "~/3d/cube";

export default function MainScene() {

  const computer = useGLTF("../models/macbook.gltf");
  
  return <>
    <OrbitControls makeDefault />

    <color args={ [ '#241a1a' ] } attach="background" />
    <primitive object={computer.scene} />
    <Cube>
      <meshNormalMaterial />
    </Cube>
  </>
}