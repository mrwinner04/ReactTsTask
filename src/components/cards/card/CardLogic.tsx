import React from "react";
import CardPresentation from "./CardPresentation";
import type { Card } from "../../../types";

interface CardLogicProps {
  card: Card;
  onEdit: () => void;
  onDelete: () => void;
}

/**
 * Card Logic Component
 */
const CardLogic: React.FC<CardLogicProps> = ({ card, onEdit, onDelete }) => {
  // Pass data to presentation component
  return <CardPresentation card={card} onEdit={onEdit} onDelete={onDelete} />;
};

export default CardLogic;
