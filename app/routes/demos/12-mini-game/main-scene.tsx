import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import Level from "./level";
import Lights from "./lights";
import Player from "./player";

export default function MainScene() {
  return <>
    <OrbitControls makeDefault />
    <Physics debug>
      <Lights />
      <Player />
      <Level />
    </Physics>
  </>;
}
