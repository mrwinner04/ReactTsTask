import styled from "styled-components";
import { colors, typography } from "../../../styles/tokens";

export const StyledText = styled.span<{
  $color: string;
  $weight: string;
  $size: string;
}>`
  color: ${({ $color }) => {
    switch ($color) {
      case "primary":
        return colors.text;
      case "muted":
        return colors.textMuted;
      case "subtle":
        return colors.textSubtle;
      case "white":
        return colors.white;
      default:
        return colors.text;
    }
  }};

  font-weight: ${({ $weight }) => {
    switch ($weight) {
      case "medium":
        return typography.weights.medium;
      case "semibold":
        return typography.weights.semibold;
      default:
        return "normal";
    }
  }};

  font-size: ${({ $size }) => {
    switch ($size) {
      case "xs":
        return typography.sizes.xs;
      case "sm":
        return typography.sizes.sm;
      case "md":
        return typography.sizes.md;
      case "lg":
        return typography.sizes.lg;
      case "xl":
        return typography.sizes.xl;
      case "xxl":
        return typography.sizes.xxl;
      default:
        return typography.sizes.md;
    }
  }};
`;
