import { Center, useGLTF, useTexture } from "@react-three/drei";
import { type Mesh } from "three";

import PortalMaterial from "./portal-material";

const PORTAL_URL = "https://i0hci4avyoqkwwp1.public.blob.vercel-storage.com/portal/portal.glb";
const PORTAL_BAKED_URL = "https://i0hci4avyoqkwwp1.public.blob.vercel-storage.com/portal/portal_baked.jpg";
export default function Portal() {

  const { nodes } = useGLTF(PORTAL_URL);
  const bakedTexture = useTexture(PORTAL_BAKED_URL);
  
  const bakedModel = nodes["baked"] as Mesh;
  const lampLeft = nodes["Lamp"] as Mesh;
  const lampRight = nodes["Lamp001"] as Mesh;
  const portal = nodes["Circle"] as Mesh;

  bakedTexture.flipY = false;

  return <Center>
    <mesh geometry={bakedModel.geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
    <mesh geometry={lampLeft.geometry}>
    </mesh>
    <mesh geometry={lampRight.geometry} />
    <mesh geometry={portal.geometry}>
      <PortalMaterial />
    </mesh>
  </Center>
}