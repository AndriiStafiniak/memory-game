import React from "react";

interface CardProps {
  id: number;
  image: string;
  isFlipped: boolean;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({
  id,
  image,
  isFlipped,
  onClick,
}) => {
  return (
    <div
      className={`memory-card ${isFlipped ? "flipped" : ""}`}
      onClick={onClick}
    >
      {isFlipped && <img src={image} alt={`Card ${id}`} />}
    </div>
  );
};
