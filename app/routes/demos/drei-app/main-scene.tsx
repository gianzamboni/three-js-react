import { Html, TransformControls, OrbitControls, PivotControls } from '@react-three/drei'
import Sphere from '~/3d/sphere';
import Floor from '~/3d/floor';
import { useRef } from 'react';
import type { Object3D } from 'three';
import styles from "./styles.module.css";
import { SketchedBorder } from '~/sketched-components/sketched-border';
import { SketchyShadow } from '~/sketched-components/randomized-shadow';
export default function Experience() {

    const cubeRef = useRef<Object3D>(null);
    const sphereRef = useRef<Object3D>(null);

    return <>
        <OrbitControls makeDefault />
        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        <PivotControls
            anchor={[0, 0, 0]}
            depthTest={false}
            lineWidth={4}
            axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
            scale={2}>
            <mesh position-x={-2} ref={sphereRef}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />

            <Html position={[1, 1, 0]} distanceFactor={8} occlude={[sphereRef, cubeRef]}>
                <SketchedBorder className={styles.label} baseStrokeWidth={0.005}>
                    <SketchyShadow strokeWidth={0.0005} offsetX={2} offsetY={2} />
                    That's a sphere! 👍
                </SketchedBorder>
            </Html>
            </mesh>
        </PivotControls>
        <Floor />


        <mesh position-x={2} scale={1.5} ref={cubeRef}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <TransformControls object={cubeRef} />

    </>;
}