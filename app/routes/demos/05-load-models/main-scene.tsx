import Hamburger from "../../../3d/hamburger";

import Fox from "./fox";

import BasicSetup from "~/3d/basic-setup";
import { GreenFloor } from "~/3d/floor";
import SketchySuspense from "~/sketched-components/sketchy-suspense";

export default function MainScene() {
  return <>
    <BasicSetup castShadow />

    <GreenFloor receiveShadow />
    <SketchySuspense>
      <Hamburger scale={0.35} position={[0, -1, 0]} />
      <Fox 
        scale={0.02}
        position={[-2.5, -1, 2.5]}
        rotation-y={0.3}
        castShadow
        receiveShadow
      />
    </SketchySuspense>
  </>;
}