import { Physics, RapierRigidBody, RigidBody } from '@react-three/rapier';
import gsap from 'gsap';
import { Suspense, useRef } from 'react';

import DefaultSetup from '~/3d/basic-setup';
import Cube from '~/3d/cube';
import Sphere from '~/3d/sphere';

export default function MainScene() {

  const cubeRef = useRef<RapierRigidBody>(null);

  const cubeJump = () => {
    cubeRef.current?.applyImpulse({ x: 0, y: 5, z: 0 }, true);
    cubeRef.current?.applyTorqueImpulse({ 
      x: gsap.utils.random(-0.5, 0.5), 
      y: gsap.utils.random(-0.5, 0.5), 
      z: gsap.utils.random(-0.5, 0.5) 
    }, true);
  }

  return <>

    <DefaultSetup castShadow />
    <Suspense>
      <Physics debug>
        <RigidBody>
          <Sphere castShadow position={[- 2, 2, 0]}>
            <meshStandardMaterial color="orange" />
          </Sphere>
        </RigidBody>

        <RigidBody ref={cubeRef} position={[2, 2, 0]}>
          <Cube castShadow onClick={cubeJump} >
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