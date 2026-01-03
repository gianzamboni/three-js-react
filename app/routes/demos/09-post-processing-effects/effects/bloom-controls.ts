import { useControls } from "leva";

import { EffectType } from "./effect-type";

import { useRegisterSidePanelConfig } from "~/stores/side-panel";

export interface BloomControls {
  luminanceThreshold: number;
  luminanceSmoothing: number;
  height: number;
}

export function useBloomControls() {
  const bloomStore = useRegisterSidePanelConfig(EffectType.Bloom);

  const controls = useControls("Bloom Effect", {
    luminanceThreshold: {
      value: 0.2,
      min: 0,
      max: 2,
      step: 0.01,
      label: "Luminance Threshold"
    },
    luminanceSmoothing: {
      value: 0.9,
      min: 0,
      max: 1,
      step: 0.01,
      label: "Luminance Smoothing"
    }
  }, {
    store: bloomStore
  });

  return controls;
}
