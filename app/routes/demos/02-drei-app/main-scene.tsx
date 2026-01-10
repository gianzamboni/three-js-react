import { PivotControls, Text, Float, MeshReflectorMaterial } from '@react-three/drei'
import { useRef, type RefObject } from 'react';

import type { Object3D } from 'three';

import BasicSetup from '~/3d/basic-setup';
import { PurpleCube } from '~/3d/cube';
import Floor from '~/3d/floor';
import { OrangeSphere } from '~/3d/sphere';
import Label from '~/sketched-components/label/label';
export default function Experience() {

  const cubeRef = useRef<Object3D>(null);
  const sphereRef = useRef<Object3D>(null);

  const occludeObjects = [sphereRef, cubeRef] as RefObject<Object3D>[];

  return <>
    <BasicSetup hidePerfPanel />

    <PivotControls
      anchor={[0, 0, 0]}
      axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
      depthTest={false}
      lineWidth={4}
      scale={2}
    >
      <OrangeSphere>
        <Label position={[1, 1, 0]} distanceFactor={8} occlude={occludeObjects}>
          That's a sphere! 👍
        </Label>
      </OrangeSphere>
    </PivotControls>
    <Floor position-y={-1}>
      <MeshReflectorMaterial 
        blur={[1000, 1000]} 
        color="greenyellow" 
        mirror={0.5} 
        mixBlur={1} 
        resolution={1024} 
      />
    </Floor>
    <PurpleCube />
    <Float speed={5} floatIntensity={2} >
      <Text
        color="salmon"
        font="/fonts/bangers-v20-latin-regular.woff"
        fontSize={1}
        maxWidth={2}
        position-y={2}
      >
        I love R3F
      </Text>
    </Float>
  </>;
}