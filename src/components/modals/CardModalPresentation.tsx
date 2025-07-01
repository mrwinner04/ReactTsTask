import React from "react";
import Button from "../ui/Button";
import styled, { css } from "styled-components";
import { animations } from "../../styles/DesignSystem";

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

/**
 * CardModal Presentation Component
 */

// Using animations from design system

const StyledCardModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: ${animations.fadeIn} 0.3s ease-out;

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    background-color: rgba(0, 0, 0, 0.8);
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  /* Print styles */
  @media print {
    display: none;
  }
`;

const StyledModalContent = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  width: 90vw;
  max-width: 500px;
  max-height: 90vh;
  overflow: hidden;
  animation: ${animations.slideIn} 0.3s ease-out;
  display: flex;
  flex-direction: column;

  /* Responsive Design */
  @media (max-width: 768px) {
    width: 95vw;
    max-height: 95vh;
    margin: 20px;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    margin: 0;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border: 2px solid #000;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    background: #2c3e50;
    color: white;
  }
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e9ecef;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    background-color: #34495e;
    border-color: #4a5568;
  }
`;

const StyledModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #212529;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const StyledModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #6c757d;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e9ecef;
    color: #495057;
  }
  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const StyledModalBody = styled.form`
  padding: 24px;
  overflow-y: auto;
  flex: 1;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const StyledFormGroup = styled.div`
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`;

const StyledFormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #495057;
  margin-bottom: 6px;

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    color: #e2e8f0;
  }
`;

const sharedInputStyles = css`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s ease;
  background-color: white;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  &.error {
    border-color: #dc3545;
    box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border-width: 2px;

    &:focus {
      border-color: #000;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    background-color: #4a5568;
    border-color: #6c757d;
    color: white;

    &::placeholder {
      color: #a0aec0;
    }
  }
`;

const StyledFormInput = styled.input`
  ${sharedInputStyles}
`;

const StyledFormTextarea = styled.textarea`
  ${sharedInputStyles}
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  line-height: 1.4;
`;

const StyledErrorText = styled.span`
  display: block;
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
`;

const StyledModalFooter = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 16px 20px;
    flex-direction: column-reverse;

    button {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    background-color: #34495e;
    border-color: #4a5568;
  }
`;

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
    <StyledCardModalBackdrop onClick={onBackdropClick}>
      <StyledModalContent role="dialog" aria-labelledby="modal-title">
        <StyledModalHeader>
          <StyledModalTitle>
            {isEditing ? "Edit Card" : "Create New Card"}
          </StyledModalTitle>
          <StyledModalCloseButton onClick={onClose} aria-label="Close modal">
            ✕
          </StyledModalCloseButton>
        </StyledModalHeader>

        <StyledModalBody onSubmit={onSubmit}>
          <StyledFormGroup>
            <StyledFormLabel htmlFor="title">Title (optional)</StyledFormLabel>
            <StyledFormInput
              id="title"
              name="title"
              type="text"
              className={errors.title ? "error" : ""}
              value={formData.title}
              onChange={onInputChange}
              placeholder="Enter card title (optional)"
            />
            {errors.title && <StyledErrorText>{errors.title}</StyledErrorText>}
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledFormLabel htmlFor="subtitle">
              Subtitle (optional)
            </StyledFormLabel>
            <StyledFormInput
              id="subtitle"
              name="subtitle"
              type="text"
              className={errors.subtitle ? "error" : ""}
              value={formData.subtitle}
              onChange={onInputChange}
              placeholder="Enter card subtitle (optional)"
            />
            {errors.subtitle && (
              <StyledErrorText>{errors.subtitle}</StyledErrorText>
            )}
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledFormLabel htmlFor="description">
              Description (optional)
            </StyledFormLabel>
            <StyledFormTextarea
              id="description"
              name="description"
              className={errors.description ? "error" : ""}
              value={formData.description}
              onChange={onInputChange}
              placeholder="Enter card description (optional)"
              rows={4}
            />
            {errors.description && (
              <StyledErrorText>{errors.description}</StyledErrorText>
            )}
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledFormLabel htmlFor="imageUrl">
              Image URL (optional)
            </StyledFormLabel>
            <StyledFormInput
              id="imageUrl"
              name="imageUrl"
              type="text"
              className={errors.imageUrl ? "error" : ""}
              value={formData.imageUrl}
              onChange={onInputChange}
              placeholder="Enter image URL (optional) - Default: src/assets/soil.jpg"
            />
            {errors.imageUrl && (
              <StyledErrorText>{errors.imageUrl}</StyledErrorText>
            )}
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledFormLabel htmlFor="ctaLabel">
              CTA Button Label (optional)
            </StyledFormLabel>
            <StyledFormInput
              id="ctaLabel"
              name="ctaLabel"
              type="text"
              className={errors.ctaLabel ? "error" : ""}
              value={formData.ctaLabel}
              onChange={onInputChange}
              placeholder="e.g., Read More, Learn More (optional)"
            />
            {errors.ctaLabel && (
              <StyledErrorText>{errors.ctaLabel}</StyledErrorText>
            )}
          </StyledFormGroup>

          <StyledModalFooter>
            <Button
              type="button"
              variant="outline"
              size="medium"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="medium"
              disabled={isLoading}
            >
              {isLoading
                ? "Saving..."
                : isEditing
                ? "Update Card"
                : "Create Card"}
            </Button>
          </StyledModalFooter>
        </StyledModalBody>
      </StyledModalContent>
    </StyledCardModalBackdrop>
  );
};

export default CardModalPresentation;
