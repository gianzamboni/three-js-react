import { Center, OrbitControls, useMatcapTexture } from "@react-three/drei";
import HelloR3FText from "./hello-r3f-text";
import { useEffect } from "react";
import { TorusGeometry, MeshMatcapMaterial, SRGBColorSpace } from "three";
import RandomPlacedMeshes from './random-placed-meshes';
import ToggablePerfPanel from "~/utils/toggable-perf-panel";

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
    <ToggablePerfPanel />
    <OrbitControls makeDefault />
    <Center>
      <HelloR3FText material={material} />
    </Center>
    <RandomPlacedMeshes material={material} geometry={donutsGeometry} />
  </>;
}