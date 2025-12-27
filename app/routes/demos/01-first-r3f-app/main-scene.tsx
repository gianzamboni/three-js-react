import { useThree } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


import RotatingCube from "../../../3d/rotating-cube";

import RandomTriangles from "./random-triangles";

import Floor from "~/3d/floor";
import { OrangeSphere } from "~/3d/sphere";
import DefaultDirectionalLight from "~/3d/lights";

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
        <OrangeSphere />
        <RandomTriangles />
      </group>
      <Floor position-y={-1}>
        <meshBasicMaterial color="greenyellow" />
      </Floor>
      <DefaultDirectionalLight />
      <ambientLight intensity={1.5}/>
    </>
  );
}