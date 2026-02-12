import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import type { Mesh } from 'three';
import type { Point3D } from '~/types/types';
import type { MeshProps } from '~/types/types';

function getRandomPosition(): Point3D {
  return [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10
  ];
}

function getRandomRotation(): Point3D {
  return [
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    0
  ];
}

function getRandomScale(): number {
  return 0.2 + Math.random() * 0.2;
}

function getRandomDonut() {
  return {
    uuid: uuidv4(),
    position: getRandomPosition(),
    rotation: getRandomRotation(),
    scale: getRandomScale()
  }
}

export default function RandomPlacedMeshes({ material, geometry }: MeshProps) {

  const donutsRefs = useRef<Mesh[]>([]);
  const [ donuts ]= useState(() => Array.from({ length: 100 }).map(() => getRandomDonut()));

  useFrame((_, delta) => {
    for(const donut of donutsRefs.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      {donuts.map((donut, index) => (
        <mesh key={donut.uuid}
          ref={(element: Mesh) => {
            donutsRefs.current[index] = element;
          }}
          material={material}
          geometry={geometry}
          position={donut.position}
          rotation={donut.rotation}
          scale={donut.scale}>
        </mesh>
      ))}
    </>
  );
};
