import { useControls } from "leva";

import { useRegisterSidePanelConfig } from "~/stores/side-panel";
import { EffectType } from "./effect-type";

export interface VignetteControls {
  offset: number;
  darkness: number;
}

export function useVignetteControls() {
  const vignetteStore = useRegisterSidePanelConfig(EffectType.Vignette);  

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
      max: 2,
      step: 0.01,
      label: "Darkness"
    }
  }, {
    store: vignetteStore
  });

  return controls;
}
