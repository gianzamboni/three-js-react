import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DirectionalLight } from "three";

import { DirectionalLightWithShadows } from "~/3d/lights";

export default function Lights() {
  const lightRef = useRef<DirectionalLight>(null);

  useFrame(({ camera }) => {
    if (!lightRef.current) return;
    lightRef.current.position.z = camera.position.z + 1 - 4;
    lightRef.current.target.position.z = camera.position.z - 4;
    lightRef.current.target.updateMatrixWorld();
  });
  
  return <>
    <DirectionalLightWithShadows
      ref={lightRef}
      position={[4, 4, 1]}
      intensity={4.5}
      shadow-camera-near={1}
      shadow-camera-far={10}
      shadow-camera-top={4}
      shadow-camera-right={4}
      shadow-camera-bottom={-4}
      shadow-camera-left={-4}
    />
    <ambientLight intensity={1.5} />
  </>
}