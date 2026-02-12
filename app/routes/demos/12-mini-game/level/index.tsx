import BlockSpinner from "./blocks/block-spinner";
import BlockStart from "./blocks/block-start";

export default function Level() {
  return <>
    <BlockStart position={[0, 0, 4]} />
    <BlockSpinner />
  </>;
}