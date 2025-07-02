import React from "react";
import CardLogic from "./CardLogic";
import type { Card } from "../../../types/Types";

interface CardComponentProps {
  card: Card;
  onEdit: () => void;
  onDelete: () => void;
  className?: string;
}

/**
 * Card Main Component
 */
const CardComponent: React.FC<CardComponentProps> = (props) => {
  return <CardLogic {...props} />;
};

export default CardComponent;
