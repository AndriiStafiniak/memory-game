import React from "react";
import { useGameStore } from "../store/gameStore";

export const Stats: React.FC = () => {
  const { score, moves, timeElapsed } = useGameStore();

  return (
    <div className="stats">
      <div className="stat-item">
        <span>Score:</span>
        <span>{score}</span>
      </div>
      <div className="stat-item">
        <span>Moves:</span>
        <span>{moves}</span>
      </div>
      <div className="stat-item">
        <span>Time:</span>
        <span>{timeElapsed}s</span>
      </div>
    </div>
  );
};
