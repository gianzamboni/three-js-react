import { InstancedRigidBodies, type InstancedRigidBodyProps } from '@react-three/rapier';
import { useMemo } from 'react';

export default function InstancedCubes() {
  const cubesCount = 1250;

  const instances = useMemo(() => {
    const instances: InstancedRigidBodyProps[] = [];

    for (let i = 0; i < cubesCount; i++) {
      instances.push({
        key: `instance-${i}`,
        position: [
          (Math.random() - 0.5) * 8,
          6 + i * 0.2,
          (Math.random() - 0.5) * 8
        ],
        rotation: [Math.random(), Math.random(), Math.random()],
      });
    }

    return instances;
  }, []);

  return (
    <InstancedRigidBodies instances={instances}>
      <instancedMesh castShadow receiveShadow args={[undefined, undefined, cubesCount]}>
        <boxGeometry />
        <meshStandardMaterial color="tomato" />
      </instancedMesh>
    </InstancedRigidBodies>
  );
}
