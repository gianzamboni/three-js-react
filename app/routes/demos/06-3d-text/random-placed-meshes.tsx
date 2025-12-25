import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import type { Mesh } from 'three';
import type { MeshProps } from '~/3d/types';

export default function RandomPlacedMeshes({ material, geometry }: MeshProps) {

  const donuts = useRef<Mesh[]>([]);

  useFrame((_, delta) => {
    for(const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      {[...Array(100)].map((_, index) => (
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
