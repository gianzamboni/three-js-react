import Floor from "./floor";
import Cube from "./cube";
import Sphere from "./sphere";
import RandomTriangles from "./random-triangles";

import { useThree } from "@react-three/fiber";

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { extend } from "@react-three/fiber";

extend({ OrbitControls });

export default function MainScene() {

  const { camera, gl } = useThree();

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <group>
        <Cube />
        <Sphere />
        <RandomTriangles />
      </group>
      <Floor />
      
      <directionalLight position={[1, 2, 3]} intensity={4.5}/>
      <ambientLight intensity={1.5}/>
    </>
  );
}