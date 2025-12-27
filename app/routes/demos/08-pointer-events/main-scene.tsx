import { meshBounds, OrbitControls } from "@react-three/drei";

import type { ThreeEvent } from "@react-three/fiber";
import type { Mesh, MeshStandardMaterial } from "three";

import Floor from "~/3d/floor";
import Hamburger from "~/3d/hamburger";
import DefaultDirectionalLight from "~/3d/lights";
import RotatingCube from "~/3d/rotating-cube";
import { OrangeSphere } from "~/3d/sphere";
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

      <DefaultDirectionalLight />
      <ambientLight intensity={ 1.5 } />

      <OrangeSphere 
        onClick={stopPropagation} 
        onPointerEnter={stopPropagation}
        onPointerLeave={stopPropagation}
      />

      <RotatingCube 
        rotationSpeed={0.2}
        raycast={ meshBounds } 
        onClick={clickHandler}
        onPointerEnter={showPointerCursor}
        onPointerLeave={hidePointerCursor}
      />

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