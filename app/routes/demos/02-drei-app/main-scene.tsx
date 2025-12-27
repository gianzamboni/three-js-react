import {  OrbitControls, PivotControls, Text, Float, MeshReflectorMaterial } from '@react-three/drei'
import { useRef, type RefObject } from 'react';

import type { Object3D } from 'three';

import Cube, { PurpleCube } from '~/3d/cube';
import Floor from '~/3d/floor';
import DefaultDirectionalLight from '~/3d/lights';
import { OrangeSphere } from '~/3d/sphere';
import Label from '~/sketched-components/label/label';
export default function Experience() {

  const cubeRef = useRef<Object3D>(null);
  const sphereRef = useRef<Object3D>(null);

  const occludeObjects = [sphereRef, cubeRef] as RefObject<Object3D>[];

  return <>
    <OrbitControls makeDefault />
    <DefaultDirectionalLight />
    <ambientLight intensity={1.5} />

    <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={4} axisColors={['#9381ff', '#ff4d6d', '#7ae582']} scale={2}>
      <OrangeSphere>
        <Label position={[1, 1, 0]} distanceFactor={8} occlude={occludeObjects}>
            That's a sphere! 👍
        </Label>
      </OrangeSphere>
    </PivotControls>
    <Floor position-y={-1}>
      <MeshReflectorMaterial resolution={1024} blur={[1000, 1000]} mixBlur={1} mirror={0.5} color="greenyellow" />
    </Floor>
    <PurpleCube />
    <Float speed={5} floatIntensity={ 2 } >
            <Text 
                font="/fonts/bangers-v20-latin-regular.woff" 
                color="salmon"
                fontSize={ 1 }
                position-y={ 2 }
                maxWidth={ 2 }
                >
                I love R3F
            </Text>
        </Float>
  </>;
}