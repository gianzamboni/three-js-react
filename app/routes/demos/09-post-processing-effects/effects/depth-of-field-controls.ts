import { useControls } from "leva";

import { EffectType } from "./effect-type";

import { useRegisterLevaStore } from "~/stores/side-panel";

export function useDepthOfFieldControls() {
  const depthOfFieldStore = useRegisterLevaStore(EffectType.DepthOfField);

  const controls = useControls("Depth of Field Effect", {
    focusDistance: {
      value: 0.025,
      min: 0,
      max: 0.1,
      step: 0.001,
      label: "Focus Distance"
    },
    focalLength: {
      value: 0.026,
      min: 0,
      max: 0.1,
      step: 0.001,
      label: "Focal Length"
    },
    bokehScale: {
      value: 6,
      min: 0,
      max: 20,
      step: 0.5,
      label: "Bokeh Scale"
    }
  }, {
    store: depthOfFieldStore
  });
  
  return controls;
}
