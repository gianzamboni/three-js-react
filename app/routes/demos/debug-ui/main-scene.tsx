import { OrbitControls } from "@react-three/drei";
import Cube from "~/3d/cube";
import Floor from "~/3d/floor";
import OrangeSphere from "~/3d/sphere";

export default function MainScene() {
  return <>
    <OrbitControls makeDefault />
    <directionalLight position={[1, 2, 3]} intensity={4.5} />
    <ambientLight intensity={1.5} />
    
    <OrangeSphere />
    <Cube  />
    <Floor>
      <meshStandardMaterial color="greenyellow" />
    </Floor>
  </>;
}