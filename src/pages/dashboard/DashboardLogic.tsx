import React from "react";
import { useSearchParams } from "react-router-dom";
import { useCards } from "../../hooks/useCards";
import DashboardPresentation from "./DashboardPresentation";
import type { Card } from "../../types";

/**
 * Dashboard Logic Component
 */
const DashboardLogic: React.FC = () => {
  const { sections, getCardById } = useCards();
  const [searchParams, setSearchParams] = useSearchParams();

  // Simple direct reading of search parameters
  const action = searchParams.get("action");
  const sectionId = searchParams.get("section");
  const cardId = searchParams.get("card");

  // Determine modal state
  const isCreating = action === "create" && !!sectionId;
  const isEditing = action === "edit" && !!cardId;
  const isModalOpen = isCreating || isEditing;
  const editingCard = isEditing && cardId ? getCardById(cardId) || null : null;
  const selectedSectionId = isCreating
    ? sectionId!
    : editingCard?.sectionId || "";

  /**
   * Handle create new card
   */
  const handleCreateCard = (targetSectionId: string) => {
    setSearchParams({ action: "create", section: targetSectionId });
  };

  /**
   * Handle editing an existing card
   */
  const handleEditCard = (card: Card) => {
    setSearchParams({ action: "edit", card: card.id });
  };

  /**
   * Handle closing the modal
   */
  const handleCloseModal = () => {
    setSearchParams({});
  };

  // Pass all data and handlers to presentation component
  return (
    <DashboardPresentation
      sections={sections}
      isModalOpen={isModalOpen}
      editingCard={editingCard}
      selectedSectionId={selectedSectionId}
      onCreateCard={handleCreateCard}
      onEditCard={handleEditCard}
      onCloseModal={handleCloseModal}
    />
  );
};

export default DashboardLogic;
