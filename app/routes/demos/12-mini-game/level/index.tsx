import BlockAxe from "./blocks/axe";
import BlockEnd from "./blocks/end";
import BlockLimbo from "./blocks/limbo";
import BlockSpinner from "./blocks/spinner";
import BlockStart from "./blocks/start";

export default function Level() {
  return <>
  <BlockStart position={ [ 0, 0, 16 ] } />
  <BlockSpinner position={ [ 0, 0, 12 ] } />
  <BlockLimbo position={ [ 0, 0, 8 ] } />
  <BlockAxe position={ [ 0, 0, 4 ] } />
  <BlockEnd position={ [ 0, 0, 0 ] } />
</>
}
