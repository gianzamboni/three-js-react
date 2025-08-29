import { useThree } from "@react-three/fiber";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { extend } from "@react-three/fiber";
import Floor from "~/3d/floor";
import RotatingCube from "./rotating-cube";
import RandomTriangles from "./random-triangles";
import OrangeSphere from "~/3d/sphere";

extend({ OrbitControls });

export default function MainScene() {

  const { camera, gl } = useThree();

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <group>
        <RotatingCube />
        <OrangeSphere />
        <RandomTriangles />
      </group>
      <Floor>
        <meshBasicMaterial color="greenyellow" />
      </Floor>
      <directionalLight position={[1, 2, 3]} intensity={4.5}/>
      <ambientLight intensity={1.5}/>
    </>
  );
}