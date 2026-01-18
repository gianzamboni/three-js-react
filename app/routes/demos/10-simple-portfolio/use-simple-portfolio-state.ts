import { create } from 'zustand';

interface SimplePortfolioState {
  zoomedIn: boolean;
  setZoomedIn: (value: boolean) => void;
}

export const useSimplePortfolioState = create<SimplePortfolioState>((set) => ({
  zoomedIn: false,
  setZoomedIn: (value: boolean) => set({ zoomedIn: value }),
}));
