import Floor from "./floor";
import Cube from "./cube";
import Sphere from "./sphere";

import { useFrame, useThree } from "@react-three/fiber";

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { extend } from "@react-three/fiber";
import CustomObject from "./custom-object";

extend({ OrbitControls });

export default function MainScene() {

  const { camera, gl } = useThree();

  // useFrame((state, delta) => {
  //   const angle = state.clock.elapsedTime * 0.125;
  //   camera.position.x = Math.sin(angle) * 8;
  //   camera.position.z = Math.cos(angle) * 8;
  //   camera.lookAt(0, 0, 0);
  // });
  
  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <group>
        <Cube />
        <Sphere />
        <CustomObject />
      </group>
      <Floor />
      
      <directionalLight position={[1, 2, 3]} intensity={4.5}/>
      <ambientLight intensity={1.5}/>
    </>
  );
}