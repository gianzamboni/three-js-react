import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import type { Mesh } from 'three';
import type { MeshProps } from '~/types/types';

export default function RandomPlacedMeshes({ material, geometry }: MeshProps) {

  const donuts = useRef<Mesh[]>([]);
  const uuids = useMemo(() => Array.from({ length: 100 }).map(() => uuidv4()), []);

  useFrame((_, delta) => {
    for(const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      {uuids.map((uuid, index) => (
        <mesh key={uuid}
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
