import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

type Phase = "loading" | "ready" | "playing" | "ended";

type GameState = {
  blocksCount: number;
  phase: Phase;
  startTime: number;
  endTime: number;
  seed: number;
  selectedCharacterIndex: number;

  start: () => void;
  restart: () => void;
  end: () => void;
  setReady: () => void;
  setSelectedCharacterIndex: (index: number) => void;
}

export default create<GameState>()(subscribeWithSelector((set) => {
  return {
    blocksCount: 10,
    phase: "loading",
    startTime: 0,
    endTime: 0,
    seed: 0,
    selectedCharacterIndex: 0,

    start: () => set((state) =>
      state.phase === "ready" ? { phase: "playing", startTime: Date.now() } : {}
    ),
    restart: () => set((state) =>
      state.phase !== "ready" && state.phase !== "loading"
        ? { phase: "ready", seed: Math.random(), selectedCharacterIndex: 0 }
        : {}
    ),
    end: () => set((state) =>
      state.phase === "playing" ? { phase: "ended", endTime: Date.now() } : {}
    ),
    setReady: () => set((state) =>
      state.phase === "loading" ? { phase: "ready" } : {}
    ),
    setSelectedCharacterIndex: (index: number) => set({ selectedCharacterIndex: index }),
  }
}));