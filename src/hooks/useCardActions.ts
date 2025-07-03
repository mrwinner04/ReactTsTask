import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCards } from "./useCards";
import type { Card } from "../types/Types";

/**
 * Comprehensive hook for all card operations
 * Handles modal state, create, edit, delete operations, navigation, and utilities
 * Used by Dashboard, Sidebar, CardSection, and individual Card components
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

  // Get selected section ID for modal
  const selectedSectionId = isCreating
    ? sectionId!
    : editingCard?.sectionId || "";

  /**
   * MODAL OPERATIONS
   */

  /**
   * Open modal for creating a new card
   */
  const handleCreateCard = (targetSectionId: string) => {
    setSearchParams({ action: "create", section: targetSectionId });
  };

  /**
   * Open modal for editing an existing card
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
   * Enhanced with custom confirmation message
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
   * Create a delete handler function for a specific card ID
   * Useful for creating event handlers in components
   */
  const createDeleteHandler = (cardId: string, cardTitle?: string) => () => {
    handleDeleteCard(cardId, cardTitle);
  };

  /**
   * Create an edit handler function for a specific card
   * Useful for creating event handlers in components
   */
  const createEditHandler = (card: Card) => () => {
    handleEditCard(card);
  };

  /**
   * NAVIGATION UTILITIES
   */

  /**
   * Navigate to card detail page
   */
  const navigateToCard = (cardId: string) => {
    navigate(`/card/${cardId}`);
  };

  /**
   * Create a navigation handler for a specific card
   */
  const createNavigationHandler = (cardId: string) => () => {
    navigateToCard(cardId);
  };

  /**
   * Navigate back to dashboard
   */
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  /**
   * Navigate to section page
   */
  const navigateToSection = (sectionName: string) => {
    navigate(`/section/${sectionName.toLowerCase()}`);
  };

  /**
   * BULK OPERATIONS
   */

  /**
   * Delete multiple cards with confirmation
   */
  const handleBulkDelete = (cardIds: string[]) => {
    if (cardIds.length === 0) return;

    const confirmMessage = `Are you sure you want to delete ${cardIds.length} card(s)?`;
    if (window.confirm(confirmMessage)) {
      cardIds.forEach((cardId) => deleteCard(cardId));
    }
  };

  /**
   * UTILITY FUNCTIONS
   */

  /**
   * Check if a card exists
   */
  const cardExists = (cardId: string): boolean => {
    return !!getCardById(cardId);
  };

  /**
   * Get card by ID with null safety
   */
  const getCard = (cardId: string): Card | null => {
    return getCardById(cardId) || null;
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
    handleBulkDelete,

    // Navigation utilities
    navigateToCard,
    createNavigationHandler,
    navigateToDashboard,
    navigateToSection,

    // Utility functions
    cardExists,
    getCard,
  };
};
