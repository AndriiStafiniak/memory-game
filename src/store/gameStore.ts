import { create } from "zustand";

interface Tile {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface GameState {
  tiles: Tile[];
  score: number;
  moves: number;
  timeElapsed: number;
  flipTile: (id: number) => void;
  resetGame: () => void;
  startNewGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  tiles: [],
  score: 0,
  moves: 0,
  timeElapsed: 0,
  flipTile: (id) =>
    set((state) => ({
      tiles: state.tiles.map((tile) =>
        tile.id === id ? { ...tile, isFlipped: !tile.isFlipped } : tile
      ),
    })),
  resetGame: () =>
    set((state) => ({
      ...state,
      score: 0,
      moves: 0,
      timeElapsed: 0,
      tiles: state.tiles.map((tile) => ({
        ...tile,
        isFlipped: false,
        isMatched: false,
      })),
    })),
  startNewGame: () =>
    set({
      score: 0,
      moves: 0,
      timeElapsed: 0,
      tiles: [], // Tu dodamy logikę generowania nowych kafelków
    }),
}));
