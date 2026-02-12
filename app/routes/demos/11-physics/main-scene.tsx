import { CuboidCollider, CylinderCollider, Physics, RigidBody } from '@react-three/rapier';

import InstancedCubes from './instanced-cubes';
import JumpyCube from './jumpy-cube';
import Twister from './twister';

import DefaultSetup from '~/3d/basic-setup';
import Hamburger from '~/3d/hamburger';
import { OrangeSphere } from '~/3d/sphere';
import SketchySuspense from '~/sketched-components/sketchy-suspense';


export default function MainScene() {
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
          <OrangeSphere castShadow position-y={2} />
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