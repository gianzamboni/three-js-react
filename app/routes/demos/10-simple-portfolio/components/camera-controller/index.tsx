import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import { useSimplePortfolioState } from "../../use-simple-portfolio-state";


import { CAMERA_SETTINGS, move3DPoint, type Tween } from "./responsive-settings";

import useResponsiveValue from "~/utils/hooks/use-responsive-value";

export function CameraController() {
  const { zoomedIn } = useSimplePortfolioState();
  const cameraSettings = useResponsiveValue(CAMERA_SETTINGS);

  const { camera } = useThree();

  const positionAnimationRef = useRef<Tween | null>(null);
  const rotationAnimationRef = useRef<Tween | null>(null);

  useEffect(() => {
    const currentSettings = cameraSettings[zoomedIn ? 'zoomedIn' : 'default'];

    positionAnimationRef.current = move3DPoint(camera.position, currentSettings.position);
    rotationAnimationRef.current = move3DPoint(camera.rotation, currentSettings.rotation);

    return () => {
      positionAnimationRef.current?.kill();
      rotationAnimationRef.current?.kill();
    };
  }, [zoomedIn, cameraSettings]);

  return <></>;
} 