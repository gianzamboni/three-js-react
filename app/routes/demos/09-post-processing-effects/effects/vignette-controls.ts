import { useControls, useCreateStore } from "leva";
import { useEffect, useRef } from "react";

import { useRegisterLevaStore } from "~/stores/leva-stores";

export interface VignetteControls {
  offset: number;
  darkness: number;
}

export function useVignetteControls(show: boolean) {
  const storeRef = useRef<ReturnType<typeof useCreateStore> | null>(null);
  
  const vignetteStore = useCreateStore();
  useRegisterLevaStore(show ? vignetteStore : null);

  // Always call useControls to follow rules of hooks, but only use the result when show is true
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
  
  useEffect(() => {
    if (show) {
      storeRef.current = vignetteStore;
    } else {
      storeRef.current = null;
    }
  }, [show, vignetteStore]);

  return show ? controls : null;
}
