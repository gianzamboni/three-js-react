import { OrbitControls } from "@react-three/drei";

export default function MainScene() {
  return <>
    <color attach="background" args={["#080712"]} />
    <OrbitControls makeDefault />

    <mesh scale={1.5}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>

  </>;
}