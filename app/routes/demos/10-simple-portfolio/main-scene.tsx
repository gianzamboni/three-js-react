import { OrbitControls } from "@react-three/drei";

export default function MainScene() {

  return <>
    <OrbitControls makeDefault />

    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  </>
}