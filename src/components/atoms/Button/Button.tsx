import React from "react";
import { StyledButton, LoadingSpinner } from "./Button.styles";
import type { ButtonSize, ButtonVariant } from "../../../styles/exportDesign";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  icon,
  children,
  disabled,
  className,
  type = "button",
  title,
  onClick,
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
      className={className}
      type={type}
      title={title}
      onClick={onClick}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
