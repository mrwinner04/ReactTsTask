import React from "react";
import styled, { css, keyframes } from "styled-components";
import type { ButtonProps } from "../../types/Types";

// Loading animation keyframes
const loadingSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

//  button styles with variants and sizes
const StyledButton = styled.button<{
  $variant: ButtonProps["variant"];
  $size: ButtonProps["size"];
  $disabled: boolean;
}>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-family: inherit;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(1px);
  }

  /* Size styles */
  ${({ $size }) => {
    switch ($size) {
      case "small":
        return css`
          padding: 6px 12px;
          font-size: 12px;
          line-height: 1.4;
          min-height: 28px;

          @media (max-width: 768px) {
            padding: 5px 10px;
            font-size: 11px;
            min-height: 26px;
          }
        `;
      case "large":
        return css`
          padding: 12px 24px;
          font-size: 16px;
          line-height: 1.5;
          min-height: 44px;

          @media (max-width: 768px) {
            padding: 10px 20px;
            font-size: 14px;
            min-height: 40px;
          }
        `;
      default: // medium
        return css`
          padding: 10px 16px;
          font-size: 14px;
          line-height: 1.5;
          min-height: 36px;

          @media (max-width: 768px) {
            padding: 8px 14px;
            font-size: 13px;
            min-height: 32px;
          }
        `;
    }
  }}

  /* Variant styles */
  ${({ $variant }) => {
    switch ($variant) {
      case "outline":
        return css`
          background-color: transparent;
          color: #007bff;
          border: 2px solid #007bff;

          &:hover:not(:disabled) {
            background-color: #007bff;
            color: white;
            transform: translateY(-1px);
          }
        `;
      default: // primary
        return css`
          background-color: #007bff;
          color: white;
          box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);

          &:hover:not(:disabled) {
            background-color: #0056b3;
            box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
            transform: translateY(-1px);
          }
        `;
    }
  }}

  /* Disabled state */
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}

  /* Loading state */
  &.loading {
    color: transparent;

    &::after {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      top: 50%;
      left: 50%;
      margin-left: -8px;
      margin-top: -8px;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-radius: 50%;
      animation: ${loadingSpin} 1s ease infinite;
    }
  }
`;

/**
 * Button Component with styled-components
 */
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
}) => {
  return (
    <StyledButton
      type={type}
      $variant={variant}
      $size={size}
      $disabled={disabled}
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
