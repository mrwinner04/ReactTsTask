import React from "react";
import CardLogic from "./CardLogic";
import type { Card } from "../../../types/Types";

interface CardComponentProps {
  card: Card;
  className?: string;
  // onEdit and onDelete props removed - handled internally by CardLogic
}

/**
 * Card Main Component
 * Simplified - edit/delete actions now handled internally via useCardActions
 */
const CardComponent: React.FC<CardComponentProps> = ({ card, className }) => {
  return <CardLogic card={card} className={className} />;
};

export default CardComponent;
