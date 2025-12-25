import { meshBounds, OrbitControls } from "@react-three/drei";

import type { ThreeEvent } from "@react-three/fiber";
import type { Mesh, MeshStandardMaterial } from "three";

import Floor from "~/3d/floor";
import Hamburger from "~/3d/hamburger";
import RotatingCube from "~/3d/rotating-cube";
import Sphere from "~/3d/sphere";
import SketchySuspense from "~/sketched-components/sketchy-suspense";

type ClickEvent = ThreeEvent<PointerEvent> & { object: Mesh & { material: MeshStandardMaterial } };

export default function MainScene() {

  const clickHandler = (event: ClickEvent) => {
    event.object.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`);
    stopPropagation(event);
  }

  const stopPropagation = (event: ClickEvent) => {
    event.stopPropagation();
  }

  const showPointerCursor = () => {
    document.body.style.cursor = 'pointer';
  }

  const hidePointerCursor = () => {
    document.body.style.cursor = 'default';
  }
  return <>
      <OrbitControls makeDefault />

      <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
      <ambientLight intensity={ 1.5 } />

      <Sphere position-x={ - 2 } color="orange" 
        onClick={stopPropagation} 
        onPointerEnter={stopPropagation}
        onPointerLeave={stopPropagation}
      />

      <RotatingCube 
        position-x={ 2 } 
        scale={ 1.5 } 
        rotationSpeed={0.2}
        raycast={ meshBounds } 
        onClick={clickHandler}
        onPointerEnter={showPointerCursor}
        onPointerLeave={hidePointerCursor}
      >
          <meshStandardMaterial color="mediumpurple" />
      </RotatingCube>

      <Floor position-y={-1}>
        <meshStandardMaterial color="greenyellow" />
      </Floor>

      <SketchySuspense>
        <Hamburger scale={0.25} position-y={ 1 } position-x={ -0.125 } 
          onClick={clickHandler}
          onPointerEnter={showPointerCursor}
          onPointerLeave={hidePointerCursor}
        />
      </SketchySuspense>
  </>
}