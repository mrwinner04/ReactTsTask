import styled from "styled-components";
import {
  breakpoints,
  spacing,
  colors,
  borderRadius,
  animations,
} from "../tokens";

export type CardLayout = "vertical" | "horizontal";
export type CardSize = "compact" | "default" | "large";

export const BaseCard = styled.article<{
  $layout?: CardLayout;
  $size?: CardSize;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.$layout === "horizontal" ? "row" : "column"};
  width: 100%;
  max-width: ${(props) => (props.$layout === "horizontal" ? "100%" : "300px")};
  flex: 1 1 280px;
  border-radius: ${borderRadius.md};
  border: 1px solid ${colors.border};
  overflow: hidden;
  margin-bottom: ${spacing.md};
  background: ${colors.white};

  /* Size-based min-height */
  min-height: ${(props) => {
    switch (props.$size) {
      case "compact":
        return "200px";
      case "large":
        return "400px";
      default:
        return "330px";
    }
  }};

  /* Horizontal layout adjustments */
  ${(props) =>
    props.$layout === "horizontal" &&
    `
    min-height: auto;
    flex: 1 1 100%;
  `}

  /* Mobile responsiveness */
  @media (max-width: ${breakpoints.md}) {
    flex: 1 1 100%;
    ${(props) =>
      props.$layout === "horizontal" &&
      `
      flex-direction: column;
    `}
  }

  /* Animation */
  animation: ${animations.fadeIn} 0.3s ease;
`;

// Base card image wrapper
export const BaseCardImage = styled.figure<{
  $layout?: CardLayout;
  $height?: string;
}>`
  margin: 0;
  height: ${(props) => props.$height || "150px"};
  width: ${(props) => (props.$layout === "horizontal" ? "200px" : "100%")};
  flex-shrink: 0;
  overflow: hidden;
  background-color: ${colors.background};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Mobile adjustments for horizontal cards */
  @media (max-width: ${breakpoints.md}) {
    width: 100% !important;
    height: 150px !important;
  }
`;
