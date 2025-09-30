import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Floor from "~/3d/floor";
import Hamburger from "./hamburger";
import { Suspense } from "react";
import Label from "~/sketched-components/label";
import Fox from "./fox";

export default function MainScene() {
  return <>
    <Perf position="bottom-right" />
    <OrbitControls makeDefault />

    <directionalLight 
      castShadow 
      position={ [ 1, 2, 3 ] } 
      intensity={ 4.5 }
      shadow-normalBias={0.04}
    />
    <ambientLight intensity={ 1.5 } />

    <Floor rotation-x={-Math.PI * 0.5} scale={10} receiveShadow >
      <meshStandardMaterial color="greenyellow" />
    </Floor>
    <Suspense fallback={<Label>Loading...</Label>}>
      <Hamburger scale={0.35} />
      <Fox 
        scale={0.02}
        position={[-2.5, 0, 2.5]}
        rotation-y={0.3}
      />
    </Suspense>
  </>;
}