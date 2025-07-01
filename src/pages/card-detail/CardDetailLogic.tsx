import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCards } from "../../hooks/useCards";
import CardDetailPresentation from "./CardDetailPresentation";

/**
 * Card Detail Logic Component
 */
const CardDetailLogic: React.FC = () => {
  const { cardId } = useParams<{ cardId: string }>();
  const navigate = useNavigate();
  const { getCardById } = useCards();

  const card = cardId ? getCardById(cardId) : undefined;

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <CardDetailPresentation
      card={card}
      cardId={cardId || ""}
      onBack={handleBack}
    />
  );
};

export default CardDetailLogic;
