import React from "react";
import { useCardModal } from "./CardModal.logic";
import { Button, Input, Text } from "../atoms";
import type { Card } from "../../types/Types";
import {
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormGroup,
  FormTextarea,
} from "../../styles/exportDesign";
import { ModalTitle, ErrorText } from "./CardModal.styles";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  sectionId: string;
  editCard?: Card | null;
}

const CardModal: React.FC<CardModalProps> = ({
  isOpen,
  onClose,
  sectionId,
  editCard = null,
}) => {
  const {
    isEditing,
    formData,
    errors,
    isLoading,
    handleInputChange,
    handleSubmit,
    handleModalClose,
    handleBackdropClick,
  } = useCardModal({ isOpen, onClose, sectionId, editCard });

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent role="dialog" aria-labelledby="modal-title">
        <ModalHeader>
          <ModalTitle variant="h3" weight="semibold" size="lg">
            {isEditing ? "Edit Card" : "Create New Card"}
          </ModalTitle>
          <ModalCloseButton onClick={handleModalClose} aria-label="Close modal">
            ✕
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody onSubmit={handleSubmit}>
          <FormGroup>
            <Text variant="caption" weight="medium" size="sm">
              Title (optional)
            </Text>
            <Input
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter card title (optional)"
            />
            {errors.title && (
              <ErrorText variant="caption" size="xs">
                {errors.title}
              </ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Text variant="caption" weight="medium" size="sm">
              Subtitle (optional)
            </Text>
            <Input
              name="subtitle"
              type="text"
              value={formData.subtitle}
              onChange={handleInputChange}
              placeholder="Enter card subtitle (optional)"
            />
            {errors.subtitle && (
              <ErrorText variant="caption" size="xs">
                {errors.subtitle}
              </ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Text variant="caption" weight="medium" size="sm">
              Description (optional)
            </Text>
            <FormTextarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter card description (optional)"
              rows={4}
            />
            {errors.description && (
              <ErrorText variant="caption" size="xs">
                {errors.description}
              </ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Text variant="caption" weight="medium" size="sm">
              Image URL (optional)
            </Text>
            <Input
              name="imageUrl"
              type="text"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="Enter image URL (optional) - Default: /assets/soil.jpg"
            />
            {errors.imageUrl && (
              <ErrorText variant="caption" size="xs">
                {errors.imageUrl}
              </ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Text variant="caption" weight="medium" size="sm">
              CTA Button Label (optional)
            </Text>
            <Input
              name="ctaLabel"
              type="text"
              value={formData.ctaLabel}
              onChange={handleInputChange}
              placeholder="e.g., Read More, Learn More (optional)"
            />
            {errors.ctaLabel && (
              <ErrorText variant="caption" size="xs">
                {errors.ctaLabel}
              </ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Text variant="caption" weight="medium" size="sm">
              Card Layout
            </Text>
            <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="layout"
                  value="vertical"
                  checked={formData.layout === "vertical"}
                  onChange={handleInputChange}
                  style={{ marginRight: "4px" }}
                />
                <Text variant="body" size="sm">
                  Vertical
                </Text>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="layout"
                  value="horizontal"
                  checked={formData.layout === "horizontal"}
                  onChange={handleInputChange}
                  style={{ marginRight: "4px" }}
                />
                <Text variant="body" size="sm">
                  Horizontal
                </Text>
              </label>
            </div>
            {errors.layout && (
              <ErrorText variant="caption" size="xs">
                {errors.layout}
              </ErrorText>
            )}
          </FormGroup>

          <ModalFooter>
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={handleModalClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isLoading}
            >
              {isLoading
                ? "Saving..."
                : isEditing
                ? "Update Card"
                : "Create Card"}
            </Button>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default CardModal;
