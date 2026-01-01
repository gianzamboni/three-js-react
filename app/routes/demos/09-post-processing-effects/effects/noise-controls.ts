import { useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { useRegisterLevaStore } from "~/stores/side-panel";
import { EffectType } from "./effect-type";


export interface NoiseControls {
  premultiply: boolean;
  blendFunction: BlendFunction;
}

export function useNoiseControls() {
  const noiseStore = useRegisterLevaStore(EffectType.Noise);

  const controls = useControls("Noise Effect", {
    premultiply: {
      value: true,
      label: "Premultiply"
    },
    blendFunction: {
      value: BlendFunction.SOFT_LIGHT,
      options: {
        "ADD": BlendFunction.ADD,
        "SCREEN": BlendFunction.SCREEN,
        "MULTIPLY": BlendFunction.MULTIPLY,
        "OVERLAY": BlendFunction.OVERLAY,
        "SOFT_LIGHT": BlendFunction.SOFT_LIGHT,
        "HARD_LIGHT": BlendFunction.HARD_LIGHT,
        "COLOR_DODGE": BlendFunction.COLOR_DODGE,
        "COLOR_BURN": BlendFunction.COLOR_BURN,
        "DARKEN": BlendFunction.DARKEN,
        "LIGHTEN": BlendFunction.LIGHTEN,
        "DIFFERENCE": BlendFunction.DIFFERENCE,
        "EXCLUSION": BlendFunction.EXCLUSION,
        "HUE": BlendFunction.HUE,
        "SATURATION": BlendFunction.SATURATION,
        "COLOR": BlendFunction.COLOR,
        "LUMINOSITY": BlendFunction.LUMINOSITY
      },
      label: "Blend Function"
    }
  }, {
    store: noiseStore
  });  

  return controls;
}
