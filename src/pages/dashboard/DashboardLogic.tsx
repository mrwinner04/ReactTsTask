import React from "react";
import { useCards } from "../../hooks/useCards";
import { useCardActions } from "../../hooks/useCardActions";
import DashboardPresentation from "./DashboardPresentation";

/**
 * Dashboard Logic Component
 */
const DashboardLogic: React.FC = () => {
  const { sections } = useCards();

  // Use comprehensive card actions hook
  const {
    isModalOpen,
    editingCard,
    selectedSectionId,
    handleCreateCard,
    handleCloseModal,
  } = useCardActions();

  // Pass all data and handlers to presentation component
  return (
    <DashboardPresentation
      sections={sections}
      isModalOpen={isModalOpen}
      editingCard={editingCard}
      selectedSectionId={selectedSectionId}
      onCreateCard={handleCreateCard}
      onCloseModal={handleCloseModal}
    />
  );
};

export default DashboardLogic;
