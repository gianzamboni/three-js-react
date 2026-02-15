import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

type Phase = "ready" | "playing" | "ended";

type GameState = {
  blocksCount: number;
  phase: Phase;
  startTime: number;
  endTime: number;
  seed: number;

  start: () => void;
  restart: () => void;
  end: () => void;
}

export default create<GameState>()(subscribeWithSelector((set) => {
  return {
    blocksCount: 10,
    phase: "ready",
    startTime: 0,
    endTime: 0,
    seed: 0,

    start: () => set((state) => 
      state.phase === "ready" ? { phase: "playing", startTime: Date.now() } : {}
    ),
    restart: () => set((state) => (state.phase !== "ready" ? { phase: "ready", seed: Math.random() } : {})),
    end: () => set((state) => 
      state.phase === "playing" ? { phase: "ended", endTime: Date.now() } : {}
    ),
  } 
}));