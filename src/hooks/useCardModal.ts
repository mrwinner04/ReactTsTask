import { useSearchParams } from "react-router-dom";
import { useCards } from "./useCards";
import type { Card } from "../types/Types";

/**
 * Reusable hook for managing card modal state with search parameters
 */
export const useCardModal = () => {
  const { getCardById } = useCards();
  const [searchParams, setSearchParams] = useSearchParams();

  // Read search parameters
  const action = searchParams.get("action");
  const sectionId = searchParams.get("section");
  const cardId = searchParams.get("card");

  // Determine modal state
  const isCreating = action === "create" && !!sectionId;
  const isEditing = action === "edit" && !!cardId;
  const isModalOpen = isCreating || isEditing;

  // Get editing card if in edit mode
  const editingCard = isEditing && cardId ? getCardById(cardId) || null : null;

  // Get selected section ID for modal
  const selectedSectionId = isCreating
    ? sectionId!
    : editingCard?.sectionId || "";

  /**
   * Open modal for create
   */
  const handleCreateCard = (targetSectionId: string) => {
    setSearchParams({ action: "create", section: targetSectionId });
  };

  /**
   * Open modal for edit an existing card
   */
  const handleEditCard = (card: Card) => {
    setSearchParams({ action: "edit", card: card.id });
  };

  /**
   * Close the modal clear search parameters
   */
  const handleCloseModal = () => {
    setSearchParams({});
  };

  return {
    // Modal state
    isModalOpen,
    isCreating,
    isEditing,
    editingCard,
    selectedSectionId,

    // Modal actions
    handleCreateCard,
    handleEditCard,
    handleCloseModal,
  };
};
