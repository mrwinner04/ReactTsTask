import { useCardActions } from "../../../hooks/useCardActions";
import { useModalActions } from "../../../hooks/useModalActions";
import type { Section } from "../../../types/Types";

export const useCardSection = (section: Section) => {
  const { handleCreateCard, handleEditCard } = useModalActions();

  const { createDeleteHandler } = useCardActions();

  const handleCreateNewCard = () => {
    handleCreateCard(section.id);
  };

  return {
    section,
    handleCreateCard: handleCreateNewCard,
    handleEditCard,
    createDeleteHandler,
  };
};
