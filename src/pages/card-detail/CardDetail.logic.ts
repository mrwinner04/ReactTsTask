import { useParams, useNavigate } from "react-router-dom";
import { useCards } from "../../hooks/useCards";

export const useCardDetail = () => {
  const { cardId } = useParams<{ cardId: string }>();
  const navigate = useNavigate();
  const { getCardById } = useCards();

  const card = cardId ? getCardById(cardId) : undefined;

  const handleBack = () => {
    navigate("/dashboard");
  };

  return {
    card,
    cardId: cardId || "",
    handleBack,
  };
};
