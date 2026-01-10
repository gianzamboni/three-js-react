import { useControls } from "leva";

import { EffectType } from "./effect-type";

import { useRegisterLevaStore } from "~/stores/side-panel";

export function useVignetteControls() {
  const vignetteStore = useRegisterLevaStore(EffectType.Vignette);  

  const controls = useControls("Vignette Effect", {
    offset: {
      value: 0.3,
      min: 0,
      max: 1,
      step: 0.01,
      label: "Offset"
    },
    darkness: {
      value: 0.9,
      min: 0,
      max: 1.5,
      step: 0.01,
      label: "Darkness"
    }
  }, {
    store: vignetteStore
  });

  return controls;
}
