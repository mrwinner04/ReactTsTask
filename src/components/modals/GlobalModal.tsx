import React from "react";
import { useSearchParams } from "react-router-dom";
import CardModal from "./CardModal";
import { useCards } from "../../hooks/useCards";

const GlobalModal: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getCardById } = useCards();

  const modalType = searchParams.get("modal");
  const action = searchParams.get("action");
  const sectionId = searchParams.get("section");
  const cardId = searchParams.get("card");

  const isOpen =
    modalType === "card" && (action === "create" || action === "edit");

  const editingCard =
    action === "edit" && cardId ? getCardById(cardId) || null : null;

  const handleCloseModal = () => {
    setSearchParams({});
  };

  if (!isOpen) return null;

  switch (modalType) {
    case "card":
      return (
        <CardModal
          isOpen={isOpen}
          onClose={handleCloseModal}
          sectionId={sectionId || ""}
          editCard={editingCard}
        />
      );
    default:
      return null;
  }
};

export default GlobalModal;
