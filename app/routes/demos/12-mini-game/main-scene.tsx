import { Physics } from "@react-three/rapier";

import Level from "./level";
import Lights from "./lights";
import Player from "./player";

export default function MainScene() {
  return <>
    <Physics>
      <Lights />
      <Player />
      <Level />
    </Physics>
  </>;
}
