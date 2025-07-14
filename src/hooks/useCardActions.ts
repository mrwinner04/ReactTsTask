import { useNavigate } from "react-router-dom";
import { useCards } from "./useCards";

export const useCardActions = () => {
  const { deleteCard } = useCards();
  const navigate = useNavigate();

  const handleDeleteCard = (cardId: string, cardTitle?: string) => {
    const confirmMessage = cardTitle
      ? `Are you sure you want to delete "${cardTitle}"?`
      : "Are you sure you want to delete this card?";

    if (window.confirm(confirmMessage)) {
      deleteCard(cardId);
    }
  };

  const createDeleteHandler = (cardId: string, cardTitle?: string) => () => {
    handleDeleteCard(cardId, cardTitle);
  };

  const navigateToCard = (cardId: string) => {
    navigate(`/card/${cardId}`);
  };

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const createCardNavigationHandler = (cardId: string) => () => {
    navigateToCard(cardId);
  };

  return {
    handleDeleteCard,
    createDeleteHandler,
    navigateToCard,
    navigateToDashboard,
    createCardNavigationHandler,
  };
};
