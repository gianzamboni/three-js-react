import DefaultSetup from '~/3d/basic-setup';
import Cube from '~/3d/cube';
import Sphere from '~/3d/sphere';
import { Physics, RigidBody } from '@react-three/rapier';
import { Suspense } from 'react';

export default function MainScene() {
  return <>

    <DefaultSetup castShadow />
    <Suspense>
      <Physics debug>
        <RigidBody>
          <Sphere castShadow position={[- 2, 2, 0]}>
            <meshStandardMaterial color="orange" />
          </Sphere>
        </RigidBody>

        <RigidBody>
          <Cube castShadow position={[2, 2, 0]}>
            <meshStandardMaterial color="mediumpurple" />
          </Cube>
        </RigidBody>

        <RigidBody type="fixed">
          <mesh receiveShadow position-y={- 1.25}>
            <boxGeometry args={[10, 0.5, 10]} />
            <meshStandardMaterial color="greenyellow" />
          </mesh>
        </RigidBody>
      </Physics>
    </Suspense>
  </>
}