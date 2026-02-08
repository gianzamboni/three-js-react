import { useFrame } from '@react-three/fiber';
import { CuboidCollider, Physics, RapierRigidBody, RigidBody } from '@react-three/rapier';
import gsap from 'gsap';
import { Suspense, useRef, useState } from 'react';
import { Euler, Quaternion } from 'three';

import DefaultSetup from '~/3d/basic-setup';
import Cube from '~/3d/cube';
import Hamburger from '~/3d/hamburger';
import Sphere from '~/3d/sphere';

export default function MainScene() {

  const cubeRef = useRef<RapierRigidBody>(null);
  const twister = useRef<RapierRigidBody>(null);

  const [ hitSound ] = useState(() => new Audio("https://i0hci4avyoqkwwp1.public.blob.vercel-storage.com/sounds/hit.mp3"));

  const cubeJump = () => {
    if (!cubeRef.current) return;
    const cube = cubeRef.current;
    const mass = cube.mass();
    const force = 5 * mass;

    cube.applyImpulse({ x: 0, y: force, z: 0 }, true);
    cube.applyTorqueImpulse({
      x: gsap.utils.random(-0.5, 0.5),
      y: gsap.utils.random(-0.5, 0.5),
      z: gsap.utils.random(-0.5, 0.5)
    }, true);
  }

  useFrame((state) => {
    if (!twister.current) return;

    const time = state.clock.getElapsedTime();
    const eulerRotation = new Euler(0, time*3, 0);
    
    const quaternionRotation = new Quaternion().setFromEuler(eulerRotation);
    twister.current?.setNextKinematicRotation(quaternionRotation);

    const angle = time * 0.5;
    const x = Math.cos(angle) * 2 ;
    const z = Math.sin(angle) * 2;
    twister.current?.setNextKinematicTranslation({ x, y: -0.8, z });
  })

  return <>
    <DefaultSetup castShadow />
    <Suspense>
      <Physics debug >
        <RigidBody>
          <Sphere castShadow position={[- 2, 2, 0]}>
            <meshStandardMaterial color="orange" />
          </Sphere>
        </RigidBody>

        <RigidBody
          ref={cubeRef}
          position={[2, 2, 0]}
          colliders={false}
        >
          <Cube castShadow onClick={cubeJump} >
            <meshStandardMaterial color="mediumpurple" />
            <CuboidCollider mass={2} args={[0.5, 0.5, 0.5]} />
          </Cube>
        </RigidBody>

        <RigidBody
          ref={twister}
          position={[0, - 0.8, 0]}
          friction={0}
          type="kinematicPosition"
        >
          <mesh castShadow scale={[0.4, 0.4, 3]}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>


        <RigidBody
          position={[0, -0.8, 0]}
          friction={0}
          type="fixed"
        >
          <mesh receiveShadow position-y={- 1.25}>
            <boxGeometry args={[10, 0.5, 10]} />
            <meshStandardMaterial color="greenyellow" />
          </mesh>
        </RigidBody>
        <RigidBody position={[0, 4, 0]}>
          <Hamburger scale={0.25}  />
        </RigidBody>
      </Physics>
    </Suspense>
  </>
}