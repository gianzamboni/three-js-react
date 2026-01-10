import { Center, useMatcapTexture } from "@react-three/drei";
import { useEffect } from "react";
import { TorusGeometry, MeshMatcapMaterial, SRGBColorSpace } from "three";

import HelloR3FText from "./hello-r3f-text";
import RandomPlacedMeshes from './random-placed-meshes';

import BasicSetup from "~/3d/basic-setup";

export default function MainScene() {

  const [matcapTexture] = useMatcapTexture('6E8C48_B8CDA7_344018_A8BC94', 256);

  const donutsGeometry = new TorusGeometry(1, 0.4, 16, 32);
  const material = new MeshMatcapMaterial();

  useEffect(() => {
    matcapTexture.colorSpace = SRGBColorSpace;
    matcapTexture.needsUpdate = true;
    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  return <>
    <BasicSetup withoutLights />
    <Center>
      <HelloR3FText material={material} />
    </Center>
    <RandomPlacedMeshes material={material} geometry={donutsGeometry} />
  </>;
}