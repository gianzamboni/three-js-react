import type { ThreeElement } from '@react-three/fiber'
import type { PortalMaterial } from './portal-material'

declare module '@react-three/fiber' {
  interface ThreeElements {
    portalMaterial: ThreeElement<typeof PortalMaterial>
  }
}

export {}


