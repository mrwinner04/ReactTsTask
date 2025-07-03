import styled from "styled-components";
import {
  colors,
  typography,
  borderRadius,
  shadows,
  breakpoints,
} from "../tokens";

/**
 *  Button Component styles
 */

// Button variants used in the app
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

// base button with only essential features
export const BaseButton = styled.button<{
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $fullWidth?: boolean;
}>`
  /* Core styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${borderRadius.sm};
  font-family: inherit;
  font-weight: ${typography.weights.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  /* Full width option */
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};

  /* Focus state */
  &:focus {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }

  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Size variants */
  ${(props) => {
    switch (props.$size) {
      case "sm":
        return `
          padding: 6px 12px;
          font-size: ${typography.sizes.xs};
          min-height: 32px;
        `;
      case "lg":
        return `
          padding: 12px 24px;
          font-size: ${typography.sizes.md};
          min-height: 48px;
        `;
      default: // md
        return `
          padding: 8px 16px;
          font-size: ${typography.sizes.sm};
          min-height: 40px;
        `;
    }
  }}

  /* Variant styles */
  ${(props) => {
    switch (props.$variant) {
      case "secondary":
        return `
          background-color: #6c757d;
          color: white;
          
          &:hover:not(:disabled) {
            background-color: #545b62;
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          color: ${colors.primary};
          border: 2px solid ${colors.primary};
          
          &:hover:not(:disabled) {
            background-color: ${colors.primary};
            color: white;
          }
        `;
      case "ghost":
        return `
          background-color: transparent;
          color: ${colors.primary};
          
          &:hover:not(:disabled) {
            background-color: rgba(0, 123, 255, 0.1);
          }
        `;
      default: // primary
        return `
          background-color: ${colors.primary};
          color: white;
          box-shadow: ${shadows.sm};
          
          &:hover:not(:disabled) {
            background-color: ${colors.primaryHover};
            box-shadow: ${shadows.md};
          }
        `;
    }
  }}

  /* Mobile responsiveness */
  @media (max-width: ${breakpoints.md}) {
    font-size: ${(props) => {
      switch (props.$size) {
        case "sm":
          return typography.sizes.xs;
        case "lg":
          return typography.sizes.sm;
        default:
          return typography.sizes.xs;
      }
    }};
  }
`;
