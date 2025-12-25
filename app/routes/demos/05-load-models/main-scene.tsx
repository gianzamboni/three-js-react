import { OrbitControls } from "@react-three/drei";
import Floor from "~/3d/floor";
import Hamburger from "../../../3d/hamburger";
import Fox from "./fox";
import SketchySuspense from "~/sketched-components/sketchy-suspense";
import ToggablePerfPanel from "~/utils/toggable-perf-panel";

export default function MainScene() {
  return <>
    <OrbitControls makeDefault />

    <directionalLight 
      castShadow 
      position={ [ 1, 2, 3 ] } 
      intensity={ 4.5 }
      shadow-normalBias={0.04}
    />
    <ambientLight intensity={ 1.5 } />

    <Floor receiveShadow >
      <meshStandardMaterial color="greenyellow" />
    </Floor>
    <SketchySuspense>
      <Hamburger scale={0.35} />
      <Fox 
        scale={0.02}
        position={[-2.5, 0, 2.5]}
        rotation-y={0.3}
      />
      <ToggablePerfPanel />
    </SketchySuspense>
  </>;
}