import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

declare module '@react-three/fiber' {
  interface ThreeElements {
    orbitControls: {
      args?: [THREE.Camera, HTMLElement]
      [key: string]: any
    }
  }
}
