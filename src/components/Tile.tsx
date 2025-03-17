import React from "react";

interface TileProps {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

export const Tile: React.FC<TileProps> = ({
  value,
  isFlipped,
  isMatched,
  onClick,
}) => {
  return (
    <div
      className={`tile ${isFlipped ? "flipped" : ""} ${
        isMatched ? "matched" : ""
      }`}
      onClick={onClick}
    >
      <div className="tile-inner">
        <div className="tile-front"></div>
        <div className="tile-back">{value}</div>
      </div>
    </div>
  );
};
