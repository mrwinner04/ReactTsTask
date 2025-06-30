import React from "react";
import CardSectionLogic from "./CardSectionLogic";
import type { Section, Card } from "../../../types";

interface CardSectionProps {
  section: Section;
  onCreateCard: () => void;
  onEditCard: (card: Card) => void;
}

/**
 * CardSection Main Component
 */
const CardSection: React.FC<CardSectionProps> = (props) => {
  return <CardSectionLogic {...props} />;
};

export default CardSection;
