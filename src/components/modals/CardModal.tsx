import React from "react";
import CardModalLogic from "./CardModalLogic";
import type { Card } from "../../types/Types";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  sectionId: string;
  editCard?: Card | null;
}

/**
 * CardModal Main Component
 */
const CardModal: React.FC<CardModalProps> = (props) => {
  return <CardModalLogic {...props} />;
};

export default CardModal;
