import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useControls, levaStore } from "leva";
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

  const [, setPosition] = useControls('Camera Position', () => ({
    positionX: { label: "X", value: DEFAULT_POSITION[0], min: -20, max: 20, step: 0.01, onChange: (v) => { camera.position.x = v; } },
    positionY: { label: "Y", value: DEFAULT_POSITION[1], min: -20, max: 20, step: 0.01, onChange: (v) => { camera.position.y = v; } },
    positionZ: { label: "Z", value: DEFAULT_POSITION[2], min: -20, max: 20, step: 0.01, onChange: (v) => { camera.position.z = v; } },
  }), { store: levaStore }, [camera]);

  const [, setRotation] = useControls('Camera Rotation', () => ({
    rotationX: { label: "X", value: DEFAULT_ROTATION[0], min: -Math.PI, max: Math.PI, step: 0.01, onChange: (v) => { camera.rotation.x = v; } },
    rotationY: { label: "Y", value: DEFAULT_ROTATION[1], min: -Math.PI, max: Math.PI, step: 0.01, onChange: (v) => { camera.rotation.y = v; } },
    rotationZ: { label: "Z", value: DEFAULT_ROTATION[2], min: -Math.PI, max: Math.PI, step: 0.01, onChange: (v) => { camera.rotation.z = v; } },
  }), { store: levaStore }, [camera]);

  const positionAnimationRef = useRef<gsap.core.Tween | null>(null);
  const rotationAnimationRef = useRef<gsap.core.Tween | null>(null);

  useFrame(() => {
    setPosition({
      positionX: camera.position.x,
      positionY: camera.position.y,
      positionZ: camera.position.z,
    });
    setRotation({
      rotationX: camera.rotation.x,
      rotationY: camera.rotation.y,
      rotationZ: camera.rotation.z,
    });
  });

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