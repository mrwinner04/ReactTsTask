import { useParams } from "react-router-dom";
import { useCards } from "../../hooks/useCards";
import { useCardActions } from "../../hooks/useCardActions";
import { useModalActions } from "../../hooks/useModalActions";
import type { Card } from "../../types/Types";

export const useSidebarPage = () => {
  const { section } = useParams<{ section: string }>();
  const { sections } = useCards();

  // Modal operations
  const { handleEditCard } = useModalActions();

  const { handleDeleteCard, navigateToDashboard, navigateToCard } =
    useCardActions();

  const currentSection = sections.find(
    (s) =>
      s.name.toLowerCase() === section?.toLowerCase() ||
      s.title.toLowerCase().includes(section?.toLowerCase() || "")
  );

  const sectionCards: Card[] = currentSection?.cards || [];

  const displayTitle = section
    ? section.charAt(0).toUpperCase() + section.slice(1)
    : currentSection?.title || "Section";

  return {
    sectionCards,
    sectionTitle: displayTitle,
    sectionName: section || "",
    handleEditCard,
    handleDeleteCard,
    navigateToDashboard,
    navigateToCard,
  };
};
