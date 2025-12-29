import { useControls, useCreateStore } from "leva";
import { useEffect, useRef } from "react";

import { useRegisterLevaStore } from "~/stores/leva-stores";

export interface DepthOfFieldControls {
  focusDistance: number;
  focalLength: number;
  bokehScale: number;
}

export function useDepthOfFieldControls(show: boolean) {
  const storeRef = useRef<ReturnType<typeof useCreateStore> | null>(null);
  
  const depthOfFieldStore = useCreateStore();
  useRegisterLevaStore(show ? depthOfFieldStore : null);

  // Always call useControls to follow rules of hooks, but only use the result when show is true
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
  
  useEffect(() => {
    if (show) {
      storeRef.current = depthOfFieldStore;
    } else {
      storeRef.current = null;
    }
  }, [show, depthOfFieldStore]);

  return show ? controls : null;
}
