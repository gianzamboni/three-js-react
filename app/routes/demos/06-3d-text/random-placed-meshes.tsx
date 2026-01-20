import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import type { Mesh } from 'three';
import type { MeshProps } from '~/3d/types';

/**
 * Render 100 meshes using the provided material and geometry; each mesh is placed, scaled, and rotated randomly and continuously spins around its Y axis.
 *
 * @param material - Material applied to every mesh
 * @param geometry - Geometry applied to every mesh
 * @returns A React fragment containing 100 mesh elements positioned, scaled, and rotated randomly; each mesh rotates around its Y axis over time
 */
export default function RandomPlacedMeshes({ material, geometry }: MeshProps) {

  const donuts = useRef<Mesh[]>([]);

  useFrame((_, delta) => {
    for(const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      {Array.from({ length: 100 }).map((_, index) => (
        <mesh key={index}
          ref={(element: Mesh) => {
            donuts.current[index] = element;
          }}
          material={material} 
          geometry={geometry}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            0
          ]}>
        </mesh>
      ))}
    </>
  );
};