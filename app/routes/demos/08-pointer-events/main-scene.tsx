import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";
import Floor from "~/3d/floor";
import RotatingCube from "~/3d/rotating-cube";
import Sphere from "~/3d/sphere";

export default function MainScene() {

  const clickHandler = (event: any) => {
    event.object.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`);
  }

  const stopPropagation = (event: any) => {
    event.stopPropagation();
  }

  return <>
      <OrbitControls makeDefault />

      <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
      <ambientLight intensity={ 1.5 } />

      <Sphere position-x={ - 2 } color="orange" onClick={stopPropagation} />

      <RotatingCube position-x={ 2 } scale={ 1.5 } rotationSpeed={0.2} onClick={clickHandler}>
          <meshStandardMaterial color="mediumpurple" />
      </RotatingCube>

      <Floor position-y={-1}>
        <meshStandardMaterial color="greenyellow" />
      </Floor>
  </>
}