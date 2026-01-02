import { useEffect, useRef } from "react";
import { create } from "zustand";
import { useCreateStore } from "leva";

import type { StoreType } from "leva/dist/declarations/src/types";

type SidePanelState = {
  levaStores: Record<string, StoreType>;
  activeStore: string | null;
  register: (key: string, store: StoreType) => void;
  unregister: (key: string) => void;
  setActiveStore: (key: string) => void;
  clear: () => void;
};

export const useSidePanel = create<SidePanelState>((set) => ({
  levaStores: {},
  activeStore: null,
  register: (key, store) =>
    set((state) => ({
      levaStores: { ...state.levaStores, [key]: store }
    })),
  unregister: (key) =>
    set((state) => {
      const newStores = { ...state.levaStores };
      delete newStores[key];
      return { levaStores: newStores };
    }),
  setActiveStore: (key) => set({ activeStore: key }),
  clear: () => set({ levaStores: {} }),
}));

export function useRegisterSidePanelConfig(key: string) {
  const register = useSidePanel((s) => s.register);
  const unregister = useSidePanel((s) => s.unregister);
  const store = useRef(useCreateStore());

  useEffect(() => {
    register(key, store.current);
    return () => {
      unregister(key);
    };
  }, [key, store, register, unregister]);

  return store.current;
}