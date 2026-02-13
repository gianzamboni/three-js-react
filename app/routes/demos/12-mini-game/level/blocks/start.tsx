import { endsMaterial } from "../globals/materials";

import BlockBase from "./base-block";

import type { BlockProps } from "./base-block";

export default function BlockStart({ position = [0, 0, 0] }: BlockProps) {
  return <BlockBase position={position} material={endsMaterial} />;
}
