import { Color, ShaderMaterial } from "three";

import portalVertexShader from "./shaders/portal.vert";
import portalFragmentShader from "./shaders/portal.frag";
import portalFragmentShaderV2 from "./shaders/portal_v2.frag";
import { useState, useEffect } from "react";
import { useFrame, type RootState } from "@react-three/fiber";
import { useControls } from "leva";

export default function PortalMaterial() {

  let [material, setMaterial] = useState<ShaderMaterial>();

  let { portalType } = useControls({
    portalType: {
      label: "Portal type",
      options: ["Smoky", "Swirly"],
    }
  })

  // Update shader when portalType changes
  useEffect(() => {
    if (!material) return;
    
    material.fragmentShader = portalType === 'Smoky' ? portalFragmentShader : portalFragmentShaderV2;
    material.dispose();
    material.needsUpdate = true;
  }, [portalType, material]);

  useFrame((_: RootState, delta: number) => {
    if (material) {
      material.uniforms.uTime.value += delta;
    }
  });

  return (
    <shaderMaterial
      ref={setMaterial}
      attach="material"
      vertexShader={portalVertexShader}
      fragmentShader={portalType === 'Smoky' ? portalFragmentShader : portalFragmentShaderV2}
      uniforms={{
        uTime: { value: 0 },
        uStartColor: { value: new Color('#d8d6ff') },
        uEndColor: { value: new Color('#000000') }
      }}
    />
  )
}

