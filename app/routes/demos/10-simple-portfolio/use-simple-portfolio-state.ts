import { create } from 'zustand';

interface SimplePortfolioState {
  zoomedIn: boolean;
  setZoomedIn: (value: boolean) => void;
}

export const useSimplePortfolioState = create<SimplePortfolioState>((set) => ({
  zoomedIn: false,
  setZoomedIn: (value: boolean) => set({ zoomedIn: value }),
}));

export const CAMERA_MOVE_DURATION = 1.5;