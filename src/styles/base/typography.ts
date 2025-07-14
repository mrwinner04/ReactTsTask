import styled from "styled-components";
import { breakpoints, spacing, colors, typography } from "../tokens";

export const BaseSpan = styled.span<{
  $size?: keyof typeof typography.sizes;
  $weight?: keyof typeof typography.weights;
  $color?: string;
}>`
  font-size: ${(props) => typography.sizes[props.$size || "md"]};
  font-weight: ${(props) => typography.weights[props.$weight || "medium"]};
  color: ${(props) => props.$color || colors.text};
`;

export const SectionTitle = styled.h2`
  margin: 0 0 ${spacing.sm} 0;
  font-size: ${typography.sizes.xxl};
  font-weight: ${typography.weights.semibold};
  color: ${colors.text};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.sizes.xl};
  }
`;

export const SectionSubtitle = styled.h5`
  margin: 0 0 ${spacing.sm} 0;
  opacity: 0.5;
  font-size: ${typography.sizes.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: ${typography.weights.medium};
  color: ${colors.textMuted};
`;

export const SectionDescription = styled.p`
  color: ${colors.textMuted};
  font-size: ${typography.sizes.md};
  margin: 0;
  line-height: ${typography.lineHeights.normal};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.sizes.sm};
  }
`;
