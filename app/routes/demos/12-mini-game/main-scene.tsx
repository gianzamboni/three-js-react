import { Physics } from "@react-three/rapier";

import Level from "./level";
import Lights from "./lights";
import Player from "./player";
import useGame from "./use-game";


export default function MainScene() {

  const blocksCount = useGame((state) => state.blocksCount);
  const seed = useGame((state) => state.seed);
  
  return <>
    <Physics>
      <Lights />
      <Player />
      <Level count={blocksCount} seed={seed} />
    </Physics>
  </>;
}
