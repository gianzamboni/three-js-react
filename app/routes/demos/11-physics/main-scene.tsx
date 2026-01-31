import { CuboidCollider, CylinderCollider, Physics, RigidBody } from '@react-three/rapier';

import InstancedCubes from './instanced-cubes';
import JumpyCube from './jumpy-cube';
import Twister from './twister';

import DefaultSetup from '~/3d/basic-setup';
import Hamburger from '~/3d/hamburger';
import Sphere from '~/3d/sphere';
import SketchySuspense from '~/sketched-components/sketchy-suspense';


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
    <SketchySuspense>
      <Physics >
        <RigidBody type="fixed">
          <CuboidCollider args={[5, 2, 0.5]} position={[0, 0, 5.5]} />
          <CuboidCollider args={[5, 2, 0.5]} position={[0, 0, - 5.5]} />
          <CuboidCollider args={[0.5, 2, 5]} position={[5.5, 0, 0]} />
          <CuboidCollider args={[0.5, 2, 5]} position={[- 5.5, 0, 0]} />
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

        <RigidBody>
          <Sphere castShadow position={[- 2, 2, 0]}>
            <meshStandardMaterial color="orange" />
          </Sphere>
        </RigidBody>

        <JumpyCube />

        <Twister />




        <RigidBody position={[0, 4, 0]} colliders={false}>
          <Hamburger scale={0.25} />
          <CylinderCollider args={[0.5, 1.25]} position={[0, 0.625, 0]} />
        </RigidBody>

        <InstancedCubes />
      </Physics>
    </SketchySuspense>
  </>
}