import React from "react";
import CardLogic from "./CardLogic";
import type { Card } from "../../../types";

interface CardComponentProps {
  card: Card;
  onEdit: () => void;
  onDelete: () => void;
}

/**
 * Card Main Component
 */
const CardComponent: React.FC<CardComponentProps> = (props) => {
  return <CardLogic {...props} />;
};

export default CardComponent;
