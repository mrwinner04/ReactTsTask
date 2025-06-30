import React from "react";
import { useCards } from "../../../hooks/useCards";
import CardSectionPresentation from "./CardSectionPresentation";
import type { Section, Card } from "../../../types";

interface CardSectionLogicProps {
  section: Section;
  onCreateCard: () => void;
  onEditCard: (card: Card) => void;
}

/**
 * CardSection Logic Component
 */
const CardSectionLogic: React.FC<CardSectionLogicProps> = ({
  section,
  onCreateCard,
  onEditCard,
}) => {
  const { deleteCard } = useCards();

  const handleDeleteCard = (cardId: string) => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      deleteCard(cardId);
    }
  };

  const createEditHandler = (card: Card) => () => onEditCard(card);

  const createDeleteHandler = (cardId: string) => () =>
    handleDeleteCard(cardId);

  return (
    <CardSectionPresentation
      section={section}
      onCreateCard={onCreateCard}
      createEditHandler={createEditHandler}
      createDeleteHandler={createDeleteHandler}
    />
  );
};

export default CardSectionLogic;
