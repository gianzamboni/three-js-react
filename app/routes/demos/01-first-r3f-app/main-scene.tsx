import { useThree } from "@react-three/fiber";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { extend } from "@react-three/fiber";
import Floor from "~/3d/floor";
import RotatingCube from "../../../3d/rotating-cube";
import RandomTriangles from "./random-triangles";
import Sphere from "~/3d/sphere";

extend({ OrbitControls });

export default function MainScene() {

  const { camera, gl } = useThree();

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <group>
        <RotatingCube scale={1.5} position-x={2} >
          <meshStandardMaterial color="mediumpurple" />
        </RotatingCube>
        <Sphere color="orange" position-x={-2}/>
        <RandomTriangles />
      </group>
      <Floor position-y={-1}>
        <meshBasicMaterial color="greenyellow" />
      </Floor>
      <directionalLight position={[1, 2, 3]} intensity={4.5}/>
      <ambientLight intensity={1.5}/>
    </>
  );
}