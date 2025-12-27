import { OrbitControls } from "@react-three/drei";

import Hamburger from "../../../3d/hamburger";

import Fox from "./fox";

import Floor, { GreenFloor } from "~/3d/floor";
import SketchySuspense from "~/sketched-components/sketchy-suspense";
import ToggablePerfPanel from "~/utils/toggable-perf-panel";
import DefaultDirectionalLight from "~/3d/lights";

export default function MainScene() {
  return <>
    <OrbitControls makeDefault />

    <DefaultDirectionalLight shadow-normalBias={0.04} />
    <ambientLight intensity={ 1.5 } />

    <GreenFloor receiveShadow />
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