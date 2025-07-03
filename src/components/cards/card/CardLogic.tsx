import React from "react";
import { useCardActions } from "../../../hooks/useCardActions";
import CardPresentation from "./CardPresentation";
import type { Card } from "../../../types/Types";

interface CardLogicProps {
  card: Card;
  className?: string;
  // onEdit and onDelete props removed - now using global handlers
}

/**
 * Card Logic Component
 * Now uses useCardActions hook directly for better reusability
 * Eliminates prop drilling and makes cards self-contained
 */
const CardLogic: React.FC<CardLogicProps> = ({ card, className }) => {
  // Use global card actions hook directly
  const { createEditHandler, createDeleteHandler } = useCardActions();

  return (
    <CardPresentation
      card={card}
      onEdit={createEditHandler(card)}
      onDelete={createDeleteHandler(card.id)}
      className={className}
    />
  );
};

export default CardLogic;
