import React from "react";
import { useGameStore } from "../store/gameStore";

export const GameControls: React.FC = () => {
  const { resetGame, startNewGame } = useGameStore();

  return (
    <div className="game-controls">
      <button onClick={startNewGame}>New Game</button>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};
