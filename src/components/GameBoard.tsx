import React from "react";
import { Tile } from "./Tile";
import { useGameStore } from "../store/gameStore";

export const GameBoard: React.FC = () => {
  const { tiles, flipTile } = useGameStore();

  return (
    <div className="game-board">
      {tiles.map((tile) => (
        <Tile key={tile.id} {...tile} onClick={() => flipTile(tile.id)} />
      ))}
    </div>
  );
};
