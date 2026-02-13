import { useMemo, type ComponentType } from "react";

import BlockAxe from "./blocks/axe";
import BlockEnd from "./blocks/end";
import BlockLimbo from "./blocks/limbo";
import BlockSpinner from "./blocks/spinner";
import BlockStart from "./blocks/start";

import type { BlockProps } from "./blocks/base-block";

import { Random } from "~/utils/random";


type LevelProps = {
  count: number;
  blockTypes: ComponentType<BlockProps>[];
}

export default function Level({ 
  count = 5, 
  blockTypes = [ BlockSpinner, BlockLimbo, BlockAxe ] 
}: LevelProps) {

  const blocks = useMemo(() => {
    const blocks = [];
    for (let i = 0; i < count; i++) {
      const newBlock = Random.choice(blockTypes);
      blocks.push(newBlock)
    }
    return blocks;
  }, [blockTypes, count]);

  return <>
    <BlockStart position={ [ 0, 0, 0 ] } />
    {blocks.map((Block, index) => <Block key={index} position={ [ 0, 0, -(index + 1) * 4 ] } />)}
    <BlockEnd position={ [ 0, 0, - (count + 1) * 4 ] } />
  </>
}
