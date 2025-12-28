import DrunkEffect, { type DrunkEffectProps } from "./effect"

import type { ThreeElements } from "@react-three/fiber";
import type { Ref } from "react";

type DrunkProps = DrunkEffectProps & {
  ref?: Ref<ThreeElements["primitive"]>
}
export default function Drunk(props: DrunkProps) {

  const effect = new DrunkEffect(props);

  return <primitive ref={props.ref} object={effect} />;
}