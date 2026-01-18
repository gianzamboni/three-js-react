import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import { CAMERA_MOVE_DURATION, useSimplePortfolioState } from "../use-simple-portfolio-state";

import type { Point3D } from "~/types/types";

function move3DPoint(target: gsap.TweenTarget, newPosition: Point3D) {
  return gsap.to(target, {
    x: newPosition[0],
    y: newPosition[1],
    z: newPosition[2],
    duration: CAMERA_MOVE_DURATION,
    ease: "power2.inOut"
  });
}

const ZOOMED_IN_POSITION: Point3D = [0.34, 0.5, 3.3];
const ZOOMED_IN_ROTATION: Point3D = [0, 0, 0];
const DEFAULT_POSITION: Point3D = [-4, 3, 6];
const DEFAULT_ROTATION: Point3D = [-0.4636476090008062, -0.5376832530932062, -0.2506869231230346];

export function CameraController() {
  const { zoomedIn } = useSimplePortfolioState();

  const { camera } = useThree();

  const positionAnimationRef = useRef<gsap.core.Tween | null>(null);
  const rotationAnimationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {  
    const targetPosition = zoomedIn ? ZOOMED_IN_POSITION : DEFAULT_POSITION;
    const targetRotation = zoomedIn ? ZOOMED_IN_ROTATION : DEFAULT_ROTATION;

    positionAnimationRef.current = move3DPoint(camera.position, targetPosition);
    rotationAnimationRef.current = move3DPoint(camera.rotation, targetRotation);

    return () => {
      positionAnimationRef.current?.kill();
      rotationAnimationRef.current?.kill();
    };
  }, [zoomedIn])

  return <></>;
} 