import { create } from "zustand";

interface GameState {
  score: number;
  increaseScore: () => void;
  resetScore: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  score: 0,
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),
}));
