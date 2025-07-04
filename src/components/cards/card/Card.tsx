import React from "react";
import { useCardActions } from "../../../hooks/useCardActions";
import CardPresentation from "./CardPresentation";
import type { Card } from "../../../types/Types";

interface CardItemProps {
  card: Card;
  className?: string;
}

/**
 * CardItem Component
 */
const CardItem: React.FC<CardItemProps> = ({ card, className }) => {
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

export default CardItem;
