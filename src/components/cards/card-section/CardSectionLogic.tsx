import React from "react";
import CardSectionPresentation from "./CardSectionPresentation";
import type { Section } from "../../../types/Types";

interface CardSectionLogicProps {
  section: Section;
  onCreateCard: () => void;
}

/**
 * CardSection Logic Component
 * Simplified - individual cards now handle their own edit/delete actions
 * No need for useCardActions here since CardComponent handles it internally
 */
const CardSectionLogic: React.FC<CardSectionLogicProps> = ({
  section,
  onCreateCard,
}) => {
  return (
    <CardSectionPresentation section={section} onCreateCard={onCreateCard} />
  );
};

export default CardSectionLogic;
