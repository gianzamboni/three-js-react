import { useControls } from "leva";

import { EffectType } from "./effect-type";

import { useRegisterLevaStore } from "~/stores/side-panel";

export function useDrunkControls() {
  const drunkStore = useRegisterLevaStore(EffectType.Drunk);

  const controls = useControls("Drunk Effect", {
    frequency: { label: "Frequency", value: 2, min: 1, max: 20 },
    amplitude: { label: "Amplitude", value: 0.1, min: 0, max: 1 }
  }, {
    store: drunkStore
  });

  return controls;
}


