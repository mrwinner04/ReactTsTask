import React from "react";
import styled from "styled-components";
import { BaseButton, colors, spacing } from "../../styles/exportDesign";
import type { ButtonSize, ButtonVariant } from "../../styles/exportDesign";

/**
 * Extended Button Component
 */

const StyledButton = styled(BaseButton)<{
  $hasIcon?: boolean;
  $loading?: boolean;
}>`
  /* Custom overrides */
  ${(props) =>
    props.$hasIcon &&
    `
    gap: ${spacing.xs};
  `}

  /* Custom loading state - handle entirely in this component */
  ${(props) =>
    props.$loading &&
    `
    opacity: 0.7;
    cursor: not-allowed;
    position: relative;
    
    /* Hide text content when loading */
    > span {
      visibility: hidden;
    }
  `}
  
  /* Custom focus ring color override */
  &:focus {
    outline-color: ${colors.primary};
    outline-width: 3px;
  }
`;

// Loading spinner component
const LoadingSpinner = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

// Button props interface extending base button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Button Component with loading state
 */
const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  icon,
  children,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $hasIcon={!!icon}
      $loading={loading}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
