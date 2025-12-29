import { useControls, useCreateStore } from "leva";
import { BlendFunction } from "postprocessing";
import { useEffect, useRef } from "react";

import { useRegisterLevaStore } from "~/stores/leva-stores";


export interface NoiseControls {
  premultiply: boolean;
  blendFunction: BlendFunction;
}

export function useNoiseControls(show: boolean) {
  const storeRef = useRef<ReturnType<typeof useCreateStore> | null>(null);
  
  const noiseStore = useCreateStore();
  useRegisterLevaStore(show ? noiseStore : null);

  // Always call useControls to follow rules of hooks, but only use the result when show is true
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
  
  useEffect(() => {
    if (show) {
      storeRef.current = noiseStore;
    } else {
      storeRef.current = null;
    }
  }, [show, noiseStore]);

  return show ? controls : null;
}
