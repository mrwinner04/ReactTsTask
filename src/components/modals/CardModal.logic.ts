import { useState, useEffect } from "react";
import { useCards } from "../../hooks/useCards";
import type { Card } from "../../types/Types";

// Valid layout options for individual cards
type CardLayoutOption = "vertical" | "horizontal";

interface CardModalLogicProps {
  isOpen: boolean;
  onClose: () => void;
  sectionId: string;
  editCard?: Card | null;
}

export const useCardModal = ({
  isOpen,
  onClose,
  sectionId,
  editCard,
}: CardModalLogicProps) => {
  const { addCard, updateCard } = useCards();
  const isEditing = Boolean(editCard);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    imageUrl: "/assets/soil.jpg",
    ctaLabel: "",
    layout: "vertical" as CardLayoutOption, // Use specific type for layout options
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        title: editCard?.title || "",
        subtitle: editCard?.subtitle || "",
        description: editCard?.description || "",
        imageUrl: editCard?.imageUrl || "/assets/soil.jpg",
        ctaLabel: editCard?.ctaLabel || "",
        layout: (editCard?.layout === "horizontal"
          ? "horizontal"
          : "vertical") as CardLayoutOption, // Map layout safely
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
        layout: formData.layout, // Include layout in card data
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

  const handleModalClose = () => {
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      imageUrl: "/assets/soil.jpg",
      ctaLabel: "",
      layout: "vertical" as CardLayoutOption, // Reset to default layout option
    });
    setErrors({});
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  return {
    isEditing,
    formData,
    errors,
    isLoading,
    handleInputChange,
    handleSubmit,
    handleModalClose,
    handleBackdropClick,
  };
};
