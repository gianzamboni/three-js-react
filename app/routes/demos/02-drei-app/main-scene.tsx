import { Html, TransformControls, OrbitControls, PivotControls, Text, Float, MeshReflectorMaterial } from '@react-three/drei'
import { useRef, type RefObject } from 'react';
import type { Object3D } from 'three';
import styles from "./styles.module.css";
import { SketchedBorder } from '~/sketched-components/sketched-border';
import { SketchyShadow } from '~/sketched-components/randomized-shadow';
import Floor from '~/3d/floor';
import Cube from '~/3d/cube';
import Sphere from '~/3d/sphere';
import Label from '~/sketched-components/label/label';
export default function Experience() {

  const cubeRef = useRef<Object3D>(null);
  const sphereRef = useRef<Object3D>(null);

  const occludeObjects = [sphereRef, cubeRef] as RefObject<Object3D>[];

  return <>
    <OrbitControls makeDefault />
    <directionalLight position={[1, 2, 3]} intensity={4.5} />
    <ambientLight intensity={1.5} />

    <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={4} axisColors={['#9381ff', '#ff4d6d', '#7ae582']} scale={2}>
      <Sphere color="orange" ref={sphereRef} position-x={-2} >
        <Label position={[1, 1, 0]} distanceFactor={8} occlude={occludeObjects}>
            That's a sphere! 👍
        </Label>
      </Sphere>
    </PivotControls>
    <Floor position-y={-1}>
      <MeshReflectorMaterial resolution={1024} blur={[1000, 1000]} mixBlur={1} mirror={0.5} color="greenyellow" />
    </Floor>
    <Cube ref={cubeRef} scale={1.5} position-x={2} >
      <meshStandardMaterial color="mediumpurple" />
    </Cube>
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