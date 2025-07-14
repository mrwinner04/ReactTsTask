import { useSearchParams } from "react-router-dom";
import { useCards } from "./useCards";
import type { Card } from "../types/Types";

export const useModalActions = () => {
  const { getCardById } = useCards();
  const [searchParams, setSearchParams] = useSearchParams();

  const modalType = searchParams.get("modal");
  const action = searchParams.get("action");
  const sectionId = searchParams.get("section");
  const cardId = searchParams.get("card");

  const isCreating = modalType === "card" && action === "create" && !!sectionId;
  const isEditing = modalType === "card" && action === "edit" && !!cardId;
  const isModalOpen = isCreating || isEditing;

  const editingCard = isEditing && cardId ? getCardById(cardId) || null : null;

  const selectedSectionId = isCreating
    ? sectionId!
    : editingCard?.sectionId || "";

  const handleCreateCard = (targetSectionId: string) => {
    setSearchParams({
      modal: "card",
      action: "create",
      section: targetSectionId,
    });
  };

  const handleEditCard = (card: Card) => {
    setSearchParams({
      modal: "card",
      action: "edit",
      card: card.id,
    });
  };

  const handleCloseModal = () => {
    setSearchParams({});
  };

  const createEditHandler = (card: Card) => () => {
    handleEditCard(card);
  };

  return {
    isModalOpen,
    isCreating,
    isEditing,
    editingCard,
    selectedSectionId,
    handleCreateCard,
    handleEditCard,
    handleCloseModal,
    createEditHandler,
  };
};
