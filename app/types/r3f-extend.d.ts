import { Camera } from 'three'
import { OrbitControls } from '@react-three/drei'
declare module '@react-three/fiber' {
  export interface ThreeElements {
    orbitControls: {
      args?: [Camera, HTMLElement]
    }
  }
}
