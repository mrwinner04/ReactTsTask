import React from "react";
import { useParams } from "react-router-dom";
import { useCards } from "../../hooks/useCards";
import { useCardActions } from "../../hooks/useCardActions";
import type { Card } from "../../types/Types";
import SidebarPagePresentation from "./SidebarPagePresentation";

/**
 * SidebarPage Component
 */
const SidebarPage: React.FC = () => {
  const { section } = useParams<{ section: string }>();
  const { sections } = useCards();

  // Use card actions hook with navigation
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

  // Find section based on URL parameter
  const currentSection = sections.find(
    (s) =>
      s.name.toLowerCase() === section?.toLowerCase() ||
      s.title.toLowerCase().includes(section?.toLowerCase() || "")
  );

  const sectionCards: Card[] = currentSection?.cards || [];

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

export default SidebarPage;
