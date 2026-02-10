import { meshBounds } from "@react-three/drei";

import type { ThreeEvent } from "@react-three/fiber";
import type { Mesh, MeshStandardMaterial } from "three";

import BasicSetup from "~/3d/basic-setup";
import Floor from "~/3d/floor";
import Hamburger from "~/3d/hamburger";
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
      <BasicSetup hidePerfPanel castShadow />

      <OrangeSphere 
        castShadow
        onClick={stopPropagation} 
        onPointerEnter={stopPropagation}
        onPointerLeave={stopPropagation}
      />

      <RotatingCube 
        castShadow
        rotationSpeed={0.2}
        raycast={ meshBounds } 
        onClick={clickHandler}
        onPointerEnter={showPointerCursor}
        onPointerLeave={hidePointerCursor}
      >
          <meshStandardMaterial color="mediumpurple" />
      </RotatingCube>

      <Floor position-y={-1} receiveShadow>
        <meshStandardMaterial color="greenyellow" />
      </Floor>

      <SketchySuspense>
        <Hamburger 
          castShadow
          scale={0.25}
          position={[ -0.125, 1, 0]} 
          onClick={clickHandler}
          onPointerEnter={showPointerCursor}
          onPointerLeave={hidePointerCursor}
        />
      </SketchySuspense>
  </>
}