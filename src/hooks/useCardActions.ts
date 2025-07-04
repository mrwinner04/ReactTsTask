import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCards } from "./useCards";
import type { Card } from "../types/Types";

/**
 * hooks for all card operations
 */
export const useCardActions = () => {
  const { getCardById, deleteCard } = useCards();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Read search parameters for modal state
  const action = searchParams.get("action");
  const sectionId = searchParams.get("section");
  const cardId = searchParams.get("card");

  // Determine modal state
  const isCreating = action === "create" && !!sectionId;
  const isEditing = action === "edit" && !!cardId;
  const isModalOpen = isCreating || isEditing;

  // Get editing card if in edit mode
  const editingCard = isEditing && cardId ? getCardById(cardId) || null : null;

  const selectedSectionId = isCreating
    ? sectionId!
    : editingCard?.sectionId || "";

  // MODAL OPERATIONS

  /**
   * Open modal for creating a new card
   */
  const handleCreateCard = (targetSectionId: string) => {
    setSearchParams({ action: "create", section: targetSectionId });
  };

  /**
   * Open modal for editing
   */
  const handleEditCard = (card: Card) => {
    setSearchParams({ action: "edit", card: card.id });
  };

  /**
   * Close the modal by clearing search parameters
   */
  const handleCloseModal = () => {
    setSearchParams({});
  };

  /**
   * CARD OPERATIONS
   */

  /**
   * Handle deleting a card with confirmation dialog
   */
  const handleDeleteCard = (cardId: string, cardTitle?: string) => {
    const confirmMessage = cardTitle
      ? `Are you sure you want to delete "${cardTitle}"?`
      : "Are you sure you want to delete this card?";

    if (window.confirm(confirmMessage)) {
      deleteCard(cardId);
    }
  };

  /**
   * Create a delete handler
   */
  const createDeleteHandler = (cardId: string, cardTitle?: string) => () => {
    handleDeleteCard(cardId, cardTitle);
  };

  /**
   * Create an edit handler
   */
  const createEditHandler = (card: Card) => () => {
    handleEditCard(card);
  };

  /**
   * NAVIGATION UTILITIES
   */

  const navigateToCard = (cardId: string) => {
    navigate(`/card/${cardId}`);
  };

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  return {
    // Modal state
    isModalOpen,
    isCreating,
    isEditing,
    editingCard,
    selectedSectionId,

    // Modal operations
    handleCreateCard,
    handleEditCard,
    handleCloseModal,

    // Card operations
    handleDeleteCard,
    createDeleteHandler,
    createEditHandler,

    // Navigation utilities
    navigateToCard,
    navigateToDashboard,
  };
};
