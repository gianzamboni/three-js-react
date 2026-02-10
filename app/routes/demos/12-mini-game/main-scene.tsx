import { OrbitControls } from "@react-three/drei";

import Lights from "./lights";

import { PurpleCube } from "~/3d/cube";
import { GreenFloor } from "~/3d/floor";
import { OrangeSphere } from "~/3d/sphere";

export default function MainScene() {
  return <>
    <OrbitControls makeDefault />

    <Lights />

    <OrangeSphere castShadow />

    <PurpleCube castShadow />

    <GreenFloor receiveShadow />
  </>;
}
