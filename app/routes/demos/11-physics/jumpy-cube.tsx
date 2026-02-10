import { CuboidCollider, RapierRigidBody, RigidBody } from '@react-three/rapier';
import gsap from 'gsap';
import { useRef } from 'react';

import Cube from '~/3d/cube';

export default function JumpyCube() {
  const cubeRef = useRef<RapierRigidBody>(null);

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
  };

  return (
    <RigidBody
      ref={cubeRef}
      position={[2, 2, 0]}
      colliders={false}
    >
      <Cube castShadow onClick={cubeJump}>
        <meshStandardMaterial color="mediumpurple" />
        <CuboidCollider mass={2} args={[0.5, 0.5, 0.5]} />
      </Cube>
    </RigidBody>
  );
}
