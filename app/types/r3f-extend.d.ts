import type { OrbitControls } from 'three/examples/jsm/Addons.js';

declare module '@react-three/fiber' {
  export interface ThreeElements {
    orbitControls: ThreeElements<OrbitControls>,
  }
}
