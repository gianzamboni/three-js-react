import { Center, OrbitControls, Text3D, useMatcapTexture } from "@react-three/drei";
import { Perf } from "r3f-perf";
import HelloR3FText from "./hello-r3f-text";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { TorusGeometry, MeshMatcapMaterial, SRGBColorSpace } from "three";
import RandomPlacedMeshes from './random-placed-meshes';

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
    <Perf position="bottom-right" />
    <OrbitControls makeDefault />
    <Center>
      <HelloR3FText material={material} />
    </Center>
    <RandomPlacedMeshes material={material} geometry={donutsGeometry} />
  </>;
}