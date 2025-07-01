import React from "react";
import CardPresentation from "./CardPresentation";
import type { Card } from "../../../types";

interface CardLogicProps {
  card: Card;
  onEdit: () => void;
  onDelete: () => void;
  className?: string;
}

/**
 * Card Logic Component
 */
const CardLogic: React.FC<CardLogicProps> = ({
  card,
  onEdit,
  onDelete,
  className,
}) => {
  // Pass data to presentation component
  return (
    <CardPresentation
      card={card}
      onEdit={onEdit}
      onDelete={onDelete}
      className={className}
    />
  );
};

export default CardLogic;
