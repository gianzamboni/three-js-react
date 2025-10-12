const PORTAL_URL = "/portal.glb";

import { Center, useGLTF, useTexture, shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from '@react-three/fiber'

import { Color, ShaderMaterial, type Mesh } from "three";

import portalVertexShader from "./shaders/portal.vert";
import portalFragmentShader from "./shaders/portal.frag";
import { useRef } from "react";

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uStartColor: new Color('#d8d6ff'),
    uEndColor: new Color('#000000')
  },
  portalVertexShader,
  portalFragmentShader
)

extend({ PortalMaterial });

export default function Portal() {

  const { nodes } = useGLTF(PORTAL_URL);
  const bakedTexture = useTexture("https://i0hci4avyoqkwwp1.public.blob.vercel-storage.com/portal/portal_baked.jpg");
  
  const portalMaterialRef = useRef<ShaderMaterial>(null);

  const bakedModel = nodes["baked"] as Mesh;
  const lampLeft = nodes["Lamp"] as Mesh;
  const lampRight = nodes["Lamp001"] as Mesh;
  const portal = nodes["Circle"] as Mesh;

  bakedTexture.flipY = false;

  useFrame((state, delta) => {
    if (portalMaterialRef.current) {
      portalMaterialRef.current.uniforms.uTime.value += delta;
    }
  });

  return <Center>
    <mesh geometry={bakedModel.geometry}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
    <mesh geometry={lampLeft.geometry}>
    </mesh>
    <mesh geometry={lampRight.geometry} />
    <mesh geometry={portal.geometry}>
      <portalMaterial ref={portalMaterialRef} />
    </mesh>
  </Center>
}