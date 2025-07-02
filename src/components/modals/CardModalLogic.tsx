import React, { useState, useEffect } from "react";
import { useCards } from "../../hooks/useCards";
import CardModalPresentation from "./CardModalPresentation";
import type { Card } from "../../types/Types";

interface CardModalLogicProps {
  isOpen: boolean;
  onClose: () => void;
  sectionId: string;
  editCard?: Card | null;
}

/**
 * CardModal Logic Component
 */
const CardModalLogic: React.FC<CardModalLogicProps> = ({
  isOpen,
  onClose,
  sectionId,
  editCard = null,
}) => {
  const { addCard, updateCard } = useCards();
  const isEditing = Boolean(editCard);

  // Form state management
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    imageUrl: "src/assets/soil.jpg",
    ctaLabel: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        title: editCard?.title || "",
        subtitle: editCard?.subtitle || "",
        description: editCard?.description || editCard?.content || "",
        imageUrl: editCard?.imageUrl || "src/assets/soil.jpg",
        ctaLabel: editCard?.ctaLabel || "",
      });
      setErrors({});
    }
  }, [isOpen, editCard]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    setErrors({});
    return true;
  };

  // form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const cardData = {
        title: formData.title?.trim() || "",
        subtitle: formData.subtitle?.trim() || "",
        description: formData.description?.trim() || "",
        imageUrl: formData.imageUrl?.trim() || "",
        ctaLabel: formData.ctaLabel?.trim() || "",
      };

      if (isEditing && editCard) {
        updateCard(editCard.id, cardData);
      } else {
        addCard(sectionId, cardData);
      }

      onClose();
    } catch (error) {
      console.error("Error saving card:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // modal close with form reset
  const handleModalClose = () => {
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      imageUrl: "src/assets/soil.jpg",
      ctaLabel: "",
    });
    setErrors({});
    onClose();
  };

  // backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  // Pass all data and handlers to presentation component
  return (
    <CardModalPresentation
      isOpen={isOpen}
      isEditing={isEditing}
      isLoading={isLoading}
      formData={formData}
      errors={errors}
      onSubmit={handleSubmit}
      onInputChange={handleInputChange}
      onClose={handleModalClose}
      onBackdropClick={handleBackdropClick}
    />
  );
};

export default CardModalLogic;
