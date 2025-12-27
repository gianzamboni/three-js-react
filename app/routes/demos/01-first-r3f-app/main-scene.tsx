import { useThree } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


import RotatingCube from "../../../3d/rotating-cube";

import RandomTriangles from "./random-triangles";

import { GreenFloor } from "~/3d/floor";
import DefaultDirectionalLight from "~/3d/lights";
import { OrangeSphere } from "~/3d/sphere";

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
      <GreenFloor />
      <DefaultDirectionalLight />
      <ambientLight intensity={1.5}/>
    </>
  );
}