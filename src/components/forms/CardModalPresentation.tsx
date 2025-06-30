import React from "react";
import Button from "../ui/Button";
import "./CardModal.css";

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
    <div className="modal-backdrop" onClick={onBackdropClick}>
      <div
        className="modal-content"
        role="dialog"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">
            {isEditing ? "Edit Card" : "Create New Card"}
          </h2>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <form className="modal-body" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title *
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className={`form-input ${errors.title ? "error" : ""}`}
              value={formData.title}
              onChange={onInputChange}
              placeholder="Enter card title"
              required
            />
            {errors.title && <span className="error-text">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subtitle" className="form-label">
              Subtitle
            </label>
            <input
              id="subtitle"
              name="subtitle"
              type="text"
              className={`form-input ${errors.subtitle ? "error" : ""}`}
              value={formData.subtitle}
              onChange={onInputChange}
              placeholder="Enter card subtitle (optional)"
            />
            {errors.subtitle && (
              <span className="error-text">{errors.subtitle}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              className={`form-textarea ${errors.description ? "error" : ""}`}
              value={formData.description}
              onChange={onInputChange}
              placeholder="Enter card description"
              rows={4}
              required
            />
            {errors.description && (
              <span className="error-text">{errors.description}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl" className="form-label">
              Image URL
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="text"
              className={`form-input ${errors.imageUrl ? "error" : ""}`}
              value={formData.imageUrl}
              onChange={onInputChange}
              placeholder="Default: src/assets/soil.jpg"
            />
            {errors.imageUrl && (
              <span className="error-text">{errors.imageUrl}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="ctaLabel" className="form-label">
              Call-to-Action Label
            </label>
            <input
              id="ctaLabel"
              name="ctaLabel"
              type="text"
              className={`form-input ${errors.ctaLabel ? "error" : ""}`}
              value={formData.ctaLabel}
              onChange={onInputChange}
              placeholder="e.g., Read More, Learn More"
            />
            {errors.ctaLabel && (
              <span className="error-text">{errors.ctaLabel}</span>
            )}
          </div>

          <div className="modal-footer">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardModalPresentation;
