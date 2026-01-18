import { useThree } from "@react-three/fiber";
import gsap from "gsap";

import { useControls, levaStore } from "leva";
import { useEffect, useRef } from "react";

import { useSimplePortfolioState } from "../../use-simple-portfolio-state";


import { CAMERA_SETTINGS, positionControlSettings, rotationControlSettings, move3DPoint } from "./utils";

import { useResponsiveValue } from "~/utils/hooks/use-responsive-value";

export function CameraController() {
  const { zoomedIn } = useSimplePortfolioState();
  const cameraSettings = useResponsiveValue(CAMERA_SETTINGS);

  const { camera } = useThree();

  useControls('Camera Position', () => ({
    positionX: positionControlSettings('x', cameraSettings.default.position[0], camera),
    positionY: positionControlSettings('y', cameraSettings.default.position[1], camera),
    positionZ: positionControlSettings('z', cameraSettings.default.position[2], camera),
  }), { store: levaStore }, [camera, cameraSettings]);

  useControls('Camera Rotation', () => ({
    rotationX: rotationControlSettings('x', cameraSettings.default.rotation[0], camera),
    rotationY: rotationControlSettings('y', cameraSettings.default.rotation[1], camera),
    rotationZ: rotationControlSettings('z', cameraSettings.default.rotation[2], camera),
  }), { store: levaStore }, [camera, cameraSettings]);

  const positionAnimationRef = useRef<gsap.core.Tween | null>(null);
  const rotationAnimationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const targetPosition = zoomedIn ? cameraSettings.zoomedIn.position : cameraSettings.default.position;
    const targetRotation = zoomedIn ? cameraSettings.zoomedIn.rotation : cameraSettings.default.rotation;

    positionAnimationRef.current = move3DPoint(camera.position, targetPosition);
    rotationAnimationRef.current = move3DPoint(camera.rotation, targetRotation);

    return () => {
      positionAnimationRef.current?.kill();
      rotationAnimationRef.current?.kill();
    };
  }, [zoomedIn]);

  return <></>;
} 