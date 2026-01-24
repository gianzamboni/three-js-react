import gsap from "gsap";

import { CAMERA_MOVE_DURATION } from "../../use-simple-portfolio-state";

import type { Point3D } from "~/types/types";

export type Tween = gsap.core.Tween;

export type MeshStatus = {
  position: Point3D;
  rotation: Point3D;
}

export type CameraSettings = {
  zoomedIn: MeshStatus;
  default: MeshStatus;
};

export function move3DPoint(target: gsap.TweenTarget, newPosition: Point3D) {
  return gsap.to(target, {
    x: newPosition[0],
    y: newPosition[1],
    z: newPosition[2],
    duration: CAMERA_MOVE_DURATION,
    ease: "power2.inOut"
  });
}

export const CAMERA_SETTINGS: Record<number, CameraSettings> = {
  320: {
    zoomedIn: {
      position: [0.11, 0.6, 4.6],
      rotation: [0, 0, 0],
    },
    default: {
      position: [-4.36, 3.69, 6.45],
      rotation: [-0.45, -0.51, -0.22],
    },
  },
  1024: {
    zoomedIn: {
      position: [0.04, 0.49, 2.05],
      rotation: [0, 0.05, 0],
    },
    default: {
      position: [-5, 5, 10],
      rotation: [-0.45, -0.51, -0.22],
    },
  },
  1920: {
    zoomedIn: {
      position: [0.34, 0.5, 3.3],
      rotation: [0, 0, 0],
    },
    default: {
      position: [-4, 3, 6],
      rotation: [-0.46, -0.54, -0.25]
    },
  },
};
