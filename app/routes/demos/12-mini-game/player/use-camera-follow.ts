import { useFrame } from "@react-three/fiber";
import { RapierRigidBody } from "@react-three/rapier";
import { useRef, useState, type RefObject } from "react";
import { Vector3 } from "three";

export function useCameraFollow(playerRef: RefObject<RapierRigidBody | null>) {
  const cameraPositionRef = useRef(new Vector3(0, 0, 0));
  const cameraTargetRef = useRef(new Vector3(0, 0, 0));

  const [smoothedCameraPosition] = useState(() => new Vector3(10, 10, 10));
  const [smoothedCameraTarget] = useState(() => new Vector3(0, 0, 0));

  useFrame(({ camera }, delta) => {
    if (!playerRef.current) return;

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
}
