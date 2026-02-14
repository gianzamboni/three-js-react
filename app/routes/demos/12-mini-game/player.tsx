import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody, useRapier } from "@react-three/rapier";
import { useCallback, useEffect, useRef, useState } from "react";
import { Vector3 } from "three";

export default function Player() {
  const playerRef = useRef<RapierRigidBody>(null);
  const impulseRef = useRef({ x: 0, y: 0, z: 0 });
  const torqueRef = useRef({ x: 0, y: 0, z: 0 });
  const cameraPositionRef = useRef(new Vector3(0, 0, 0));
  const cameraTargetRef = useRef(new Vector3(0, 0, 0));

  const [smoothedCameraPosition] = useState(() => new Vector3(10, 10, 10));
  const [smoothedCameraTarget] = useState(() => new Vector3(0, 0, 0));

  const { rapier, world } = useRapier();
  const [subscribeKeys, getKeys] = useKeyboardControls();

  const jump = useCallback(() => {
    if (!playerRef.current) return;

    const origin = playerRef.current.translation();
    origin.y -= 0.31;
    const ray = new rapier.Ray(origin, { x: 0, y: -1, z: 0 });

    const hit = world.castRay(ray, 1, true);

    if (hit && hit.timeOfImpact < 0.15) {
      playerRef.current.applyImpulse({ y: 0.5, x: 0, z: 0 }, true);
    }
  }, []);

  useEffect(() => {
    const unsubscribeKeys = subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) jump();
      }
    );

    return () => unsubscribeKeys();
  }, []);

  useFrame(({ camera }, delta) => {
    if (!playerRef.current) return;

    const { forward, backward, leftward, rightward } = getKeys();

    const clampedDelta = Math.min(delta, 1 / 30);
    const impulseStrength = 0.6 * clampedDelta;
    const torqueStrength = 0.2 * clampedDelta;

    const impulse = impulseRef.current;
    const torque = torqueRef.current;
    impulse.x = 0; impulse.y = 0; impulse.z = 0;
    torque.x = 0; torque.y = 0; torque.z = 0;

    const fwd = +forward - +backward;
    const right = +rightward - +leftward;

    impulse.z -= fwd * impulseStrength;
    impulse.x += right * impulseStrength;
    torque.x -= fwd * torqueStrength;
    torque.z -= right * torqueStrength;

    playerRef.current.applyImpulse(impulse, true);
    playerRef.current.applyTorqueImpulse(torque, true);

    const bodyPosition = playerRef.current.translation();
    cameraPositionRef.current.copy(bodyPosition);
    cameraPositionRef.current.y += 0.65;
    cameraPositionRef.current.z += 2.25;

    cameraTargetRef.current.copy(bodyPosition);
    cameraTargetRef.current.y += 0.25;

    smoothedCameraPosition.lerp(cameraPositionRef.current, 5 * delta);
    smoothedCameraTarget.lerp(cameraTargetRef.current, 5 * delta);

    camera.position.copy(smoothedCameraPosition);
    camera.lookAt(smoothedCameraTarget);

  });

  return <RigidBody
    ref={playerRef}
    colliders="ball"
    canSleep={false}
    position={[0, 1, 0]}
    restitution={0.2}
    friction={1}
    linearDamping={0.5}
    angularDamping={0.5}
  >
    <mesh castShadow>
      <icosahedronGeometry args={[0.3, 1]} />
      <meshStandardMaterial
        color="mediumpurple"
        flatShading
      />
    </mesh>
  </RigidBody>;
}