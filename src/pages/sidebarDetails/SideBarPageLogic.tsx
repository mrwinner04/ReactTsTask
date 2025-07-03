import React from "react";
import { useParams } from "react-router-dom";
import { useCards } from "../../hooks/useCards";
import { useCardActions } from "../../hooks/useCardActions";
import type { Card } from "../../types/Types";
import SidebarPagePresentation from "./SidebarPagePresentation";

/**
 * Logic component for generic sidebar page
 * Now uses enhanced useCardActions for all operations including navigation
 */
const SidebarPageLogic: React.FC = () => {
  const { section } = useParams<{ section: string }>();
  const { sections } = useCards();

  // Use enhanced card actions hook with navigation utilities
  const {
    isModalOpen,
    editingCard,
    selectedSectionId,
    handleEditCard,
    handleCloseModal,
    handleDeleteCard,
    navigateToDashboard,
    navigateToCard,
  } = useCardActions();

  // Find the section based on URL parameter
  const currentSection = sections.find(
    (s) =>
      s.name.toLowerCase() === section?.toLowerCase() ||
      s.title.toLowerCase().includes(section?.toLowerCase() || "")
  );

  // Get all cards for this section
  const sectionCards: Card[] = currentSection?.cards || [];

  // Create a display title based on the section parameter
  const displayTitle = section
    ? section.charAt(0).toUpperCase() + section.slice(1)
    : currentSection?.title || "Section";

  return (
    <SidebarPagePresentation
      sectionCards={sectionCards}
      sectionTitle={displayTitle}
      sectionName={section || ""}
      isModalOpen={isModalOpen}
      editingCard={editingCard}
      selectedSectionId={selectedSectionId}
      onEditCard={handleEditCard}
      onDeleteCard={handleDeleteCard}
      onCloseModal={handleCloseModal}
      onNavigateToDashboard={navigateToDashboard}
      onNavigateToCard={navigateToCard}
    />
  );
};

export default SidebarPageLogic;
