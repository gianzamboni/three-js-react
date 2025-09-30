import { OrbitControls } from "@react-three/drei";

export default function MainScene() {
  return <>
    <color attach="background" args={["#000000"]} />
    <OrbitControls makeDefault />

    <mesh scale={1.5}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>

  </>;
}