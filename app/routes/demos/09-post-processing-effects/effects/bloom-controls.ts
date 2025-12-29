import { useControls, useCreateStore } from "leva";
import { useEffect, useRef } from "react";

import { useRegisterLevaStore } from "~/stores/leva-stores";

export interface BloomControls {
  luminanceThreshold: number;
  luminanceSmoothing: number;
  height: number;
}

export function useBloomControls(show: boolean) {
  const storeRef = useRef<ReturnType<typeof useCreateStore> | null>(null);
  
  const bloomStore = useCreateStore();
  useRegisterLevaStore(show ? bloomStore : null);

  // Always call useControls to follow rules of hooks, but only use the result when show is true
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
  
  useEffect(() => {
    if (show) {
      storeRef.current = bloomStore;
    } else {
      storeRef.current = null;
    }
  }, [show, bloomStore]);

  return show ? controls : null;
}
