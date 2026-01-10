import { useEffect, useRef } from "react";

import DrunkEffect, { type DrunkEffectProps } from "./effect"

import type { ThreeElements } from "@react-three/fiber";
import type { Ref } from "react";
import type { Uniform } from "three";

type DrunkProps = DrunkEffectProps & {
  ref?: Ref<ThreeElements["primitive"]>
}
export default function Drunk(props: DrunkProps) {

  const { frequency, amplitude } = props;

  const effect = useRef(new DrunkEffect({
    frequency,
    amplitude,
  }));

  useEffect(() => {
    const uniform = effect.current.uniforms.get('frequency') as Uniform;
    uniform.value = frequency ?? 2;
  }, [frequency]);

  useEffect(() => {
    const uniform = effect.current.uniforms.get('amplitude') as Uniform;
    uniform.value = amplitude ?? 0.1;
  }, [amplitude]);

  return <primitive ref={props.ref} object={effect.current} />;
}