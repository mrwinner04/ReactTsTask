import React from "react";
import Button from "../ui/Button";
import styled from "styled-components";
import {
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  typography,
  spacing,
} from "../../styles";

interface CardModalPresentationProps {
  isOpen: boolean;
  isEditing: boolean;
  isLoading: boolean;
  formData: {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    ctaLabel: string;
  };
  errors: Record<string, string>;
  onSubmit: (e: React.FormEvent) => void;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClose: () => void;
  onBackdropClick: (e: React.MouseEvent) => void;
}

// Simple error text component
const ErrorText = styled.span`
  display: block;
  color: #dc3545;
  font-size: ${typography.sizes.xs};
  margin-top: ${spacing.xs};
`;

/**
 * CardModal Presentation Component
 */
const CardModalPresentation: React.FC<CardModalPresentationProps> = ({
  isOpen,
  isEditing,
  isLoading,
  formData,
  errors,
  onSubmit,
  onInputChange,
  onClose,
  onBackdropClick,
}) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onBackdropClick}>
      <ModalContent role="dialog" aria-labelledby="modal-title">
        <ModalHeader>
          <ModalTitle>{isEditing ? "Edit Card" : "Create New Card"}</ModalTitle>
          <ModalCloseButton onClick={onClose} aria-label="Close modal">
            ✕
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody onSubmit={onSubmit}>
          <FormGroup>
            <FormLabel htmlFor="title">Title (optional)</FormLabel>
            <FormInput
              id="title"
              name="title"
              type="text"
              className={errors.title ? "error" : ""}
              value={formData.title}
              onChange={onInputChange}
              placeholder="Enter card title (optional)"
            />
            {errors.title && <ErrorText>{errors.title}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="subtitle">Subtitle (optional)</FormLabel>
            <FormInput
              id="subtitle"
              name="subtitle"
              type="text"
              className={errors.subtitle ? "error" : ""}
              value={formData.subtitle}
              onChange={onInputChange}
              placeholder="Enter card subtitle (optional)"
            />
            {errors.subtitle && <ErrorText>{errors.subtitle}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="description">Description (optional)</FormLabel>
            <FormTextarea
              id="description"
              name="description"
              className={errors.description ? "error" : ""}
              value={formData.description}
              onChange={onInputChange}
              placeholder="Enter card description (optional)"
              rows={4}
            />
            {errors.description && <ErrorText>{errors.description}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="imageUrl">Image URL (optional)</FormLabel>
            <FormInput
              id="imageUrl"
              name="imageUrl"
              type="text"
              className={errors.imageUrl ? "error" : ""}
              value={formData.imageUrl}
              onChange={onInputChange}
              placeholder="Enter image URL (optional) - Default: src/assets/soil.jpg"
            />
            {errors.imageUrl && <ErrorText>{errors.imageUrl}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="ctaLabel">
              CTA Button Label (optional)
            </FormLabel>
            <FormInput
              id="ctaLabel"
              name="ctaLabel"
              type="text"
              className={errors.ctaLabel ? "error" : ""}
              value={formData.ctaLabel}
              onChange={onInputChange}
              placeholder="e.g., Read More, Learn More (optional)"
            />
            {errors.ctaLabel && <ErrorText>{errors.ctaLabel}</ErrorText>}
          </FormGroup>

          <ModalFooter>
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={onClose}
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

export default CardModalPresentation;
