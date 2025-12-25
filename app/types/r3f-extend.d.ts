import { Camera } from 'three'

declare module '@react-three/fiber' {
  export interface ThreeElements {
    orbitControls: {
      args?: [Camera, HTMLElement]
    }
  }
}
