import type { Point3D } from "~/types/types";

type ComputerFinalState = {
  lidRotation: number;
  elasticBounce: number;
  position: Point3D;
  rotation: Point3D;
  orientation: 'portrait' | 'landscape';
}

export const COMPUTER_SETTINGS: Record<number, ComputerFinalState> = {
  320: {
    lidRotation: -2,
    elasticBounce: 2,
    position: [0, 0.5, -1.3],
    rotation: [-0.5, 2.58, -1.5],
    orientation: 'portrait',
  },
  1024: {
    lidRotation: 1.3105023838474816,
    elasticBounce: 0.625,
    position: [0, -1.2, 0],
    rotation: [0, 0, 0],
    orientation: 'landscape',
  },
}