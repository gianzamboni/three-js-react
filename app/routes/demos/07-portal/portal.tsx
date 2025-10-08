const PORTAL_URL = "/portal.glb";

import { Center, useGLTF, useTexture } from "@react-three/drei";

import { LinearSRGBColorSpace, type Mesh } from "three";

export default function Portal() {

  const { nodes } = useGLTF(PORTAL_URL);
  const bakedTexture = useTexture("https://i0hci4avyoqkwwp1.public.blob.vercel-storage.com/portal/portal_baked.jpg");
  bakedTexture.flipY = false;

  console.log(nodes);

  const bakedModel = nodes["baked"] as Mesh;
  const lampLeft = nodes["Lamp"] as Mesh;
  const lampRight = nodes["Lamp001"] as Mesh;
  const portal = nodes["Circle"] as Mesh;

  return <Center>
    <mesh geometry={bakedModel.geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
    <mesh geometry={lampLeft.geometry}>
    </mesh>
    <mesh geometry={lampRight.geometry} />
    <mesh geometry={portal.geometry}>
      <meshBasicMaterial color="blue" />
    </mesh>
  </Center>
}