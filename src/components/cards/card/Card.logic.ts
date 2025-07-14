import { useCardActions } from "../../../hooks/useCardActions";
import { useModalActions } from "../../../hooks/useModalActions";
import type { Card } from "../../../types/Types";

interface CardLogicProps {
  card: Card;
  className?: string;
}

export const useCard = ({ card, className }: CardLogicProps) => {
  const { handleEditCard } = useModalActions();

  const { createDeleteHandler } = useCardActions();

  const handleEdit = () => {
    handleEditCard(card);
  };

  const handleDelete = createDeleteHandler(card.id, card.title);

  return {
    card,
    className,
    handleEdit,
    handleDelete,
  };
};
