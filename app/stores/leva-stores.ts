import { useEffect } from "react";
import { create } from "zustand";

import type { StoreType } from "leva/dist/declarations/src/types";

type LevaStoresState = {
  levaStores: StoreType[];
  register: (_store: StoreType) => void;
  unregister: (_store: StoreType) => void;
  clear: () => void;
};

export const useLevaStores = create<LevaStoresState>((set) => ({
  levaStores: [],
  register: (store) =>
    set((state) =>
      state.levaStores.includes(store)
        ? state
        : { ...state, levaStores: [...state.levaStores, store] }
    ),
  unregister: (store) =>
    set((state) => ({
      ...state,
      levaStores: state.levaStores.filter((s) => s !== store),
    })),
  clear: () => set({ levaStores: [] }),
}));

export function useRegisterLevaStore(store?: StoreType | null) {
  const register = useLevaStores((s) => s.register);
  const unregister = useLevaStores((s) => s.unregister);

  useEffect(() => {
    if (!store) return;
    register(store);
    return () => {
      unregister(store);
    };
  }, [store, register, unregister]);
}