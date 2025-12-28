import { useControls, useCreateStore } from "leva";
import { useEffect, useMemo, useRef } from "react";

import DrunkEffect, { type DrunkEffectProps } from "./effect"

import type { ThreeElements } from "@react-three/fiber";
import type { Ref } from "react";

import { useRegisterLevaStore } from "~/stores/leva-stores";

type DrunkProps = Partial<DrunkEffectProps> & {
  ref?: Ref<ThreeElements["primitive"]>
}
export default function Drunk(props: DrunkProps) {

  const drunkStore = useCreateStore();
  useRegisterLevaStore(drunkStore);

  const { frequency, amplitude } = useControls('Drunk Effect', {
    frequency: { value: props.frequency ?? 2, min: 1, max: 20 },
    amplitude: { value: props.amplitude ?? 0.1, min: 0, max: 1 }
  }, { store: drunkStore });

  const effect = useRef(new DrunkEffect({
      frequency,
      amplitude,
      blendFunction: props.blendFunction
    }));

  useEffect(() => {
    const uniform = effect.current.uniforms.get('frequency');
    if (uniform) {
      uniform.value = frequency;
    }
  }, [frequency]);

  useEffect(() => {
    const uniform = effect.current.uniforms.get('amplitude');
    if (uniform) {
      uniform.value = amplitude;
    }
  }, [amplitude]);

  useEffect(() => {
    if (props.blendFunction !== undefined) {
      effect.current.blendMode.blendFunction = props.blendFunction;
    }
  }, [props.blendFunction]);

  return <primitive ref={props.ref} object={effect.current} />;
}