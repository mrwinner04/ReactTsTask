import React from "react";
import CardSectionLogic from "./CardSectionLogic";
import type { Section } from "../../../types/Types";

interface CardSectionProps {
  section: Section;
  onCreateCard: () => void;
  // onEditCard prop removed - CardSectionLogic now uses global handler
}

/**
 * CardSection Main Component
 */
const CardSection: React.FC<CardSectionProps> = ({ section, onCreateCard }) => {
  return <CardSectionLogic section={section} onCreateCard={onCreateCard} />;
};

export default CardSection;
