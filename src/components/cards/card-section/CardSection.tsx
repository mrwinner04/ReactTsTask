import React from "react";
import CardSectionPresentation from "./CardSectionPresentation";
import type { Section } from "../../../types/Types";

interface CardSectionProps {
  section: Section;
  onCreateCard: () => void;
}

/**
 * CardSection Component
 */
const CardSection: React.FC<CardSectionProps> = ({ section, onCreateCard }) => {
  return (
    <CardSectionPresentation section={section} onCreateCard={onCreateCard} />
  );
};

export default CardSection;
