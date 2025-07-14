import React from "react";
import { StyledText } from "./Text.styles";

interface TextProps {
  variant?: "h1" | "h2" | "h3" | "body" | "caption";
  color?: "primary" | "muted" | "subtle" | "white";
  weight?: "medium" | "semibold";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  variant = "body",
  color = "primary",
  weight = "medium",
  size = "md",
  children,
  className,
}) => {
  if (variant === "h1") {
    return (
      <StyledText
        as="h1"
        $color={color}
        $weight={weight}
        $size={size}
        className={className}
      >
        {children}
      </StyledText>
    );
  }

  if (variant === "h2") {
    return (
      <StyledText
        as="h2"
        $color={color}
        $weight={weight}
        $size={size}
        className={className}
      >
        {children}
      </StyledText>
    );
  }

  if (variant === "h3") {
    return (
      <StyledText
        as="h3"
        $color={color}
        $weight={weight}
        $size={size}
        className={className}
      >
        {children}
      </StyledText>
    );
  }

  if (variant === "body") {
    return (
      <StyledText
        as="p"
        $color={color}
        $weight={weight}
        $size={size}
        className={className}
      >
        {children}
      </StyledText>
    );
  }

  return (
    <StyledText
      $color={color}
      $weight={weight}
      $size={size}
      className={className}
    >
      {children}
    </StyledText>
  );
};

export default Text;
