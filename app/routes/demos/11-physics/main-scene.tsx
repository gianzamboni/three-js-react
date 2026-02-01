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
  const twister = useRef<RapierRigidBody>(null);

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