import styled, { keyframes } from "styled-components";

/**
 * Simplified Design System - Keep It Simple
 */

// Core breakpoints (simplified from 8 to 4)
export const breakpoints = {
  sm: "680px",
  md: "768px",
  lg: "980px",
  xl: "1200px",
};

// Core spacing (simplified from 8 to 4)
export const spacing = {
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "48px",
};

// Simple animations (only what's used)
export const animations = {
  fadeIn: keyframes`from { opacity: 0; } to { opacity: 1; }`,
  slideIn: keyframes`
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  `,
};

// LAYOUT COMPONENTS

export const ResponsiveContainer = styled.div<{
  maxWidth?: "content" | "section";
  padding?: keyof typeof spacing;
}>`
  width: 100%;
  max-width: ${(props) => (props.maxWidth === "section" ? "1200px" : "1400px")};
  margin: 0 auto;
  padding: 0 ${(props) => spacing[props.padding || "lg"]};

  @media (max-width: ${breakpoints.md}) {
    padding: 0 ${spacing.md};
  }
`;

export const BaseSection = styled.section`
  margin-bottom: ${spacing.xl};
  width: 100%;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.lg};
  gap: ${spacing.md};

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SectionInfo = styled.div`
  flex: 1;

  @media (max-width: ${breakpoints.lg}) {
    text-align: center;
  }
`;

export const CardGrid = styled.div<{
  variant?: "default" | "stack";
  gap?: keyof typeof spacing;
}>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => spacing[props.gap || "md"]};
  align-items: stretch;
  justify-content: center;

  ${(props) =>
    props.variant === "default" &&
    `
    justify-content: flex-start;
    @media (max-width: ${breakpoints.md}) {
      justify-content: center;
    }
  `}

  ${(props) =>
    props.variant === "stack" &&
    `
    flex-direction: column;
    align-items: center;
  `}

  /* Featured section special styling */
  .section--featured & {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${spacing.lg};
    justify-items: center;

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BaseCard = styled.article<{
  layout?: "vertical" | "horizontal";
  size?: "compact" | "default" | "large";
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.layout === "horizontal" ? "row" : "column"};
  width: 100%;
  max-width: ${(props) => (props.layout === "horizontal" ? "100%" : "300px")};
  flex: 1 1 280px;
  border-radius: 10px;
  border: 1px solid #e1dede;
  overflow: hidden;
  margin-bottom: ${spacing.md};
  min-height: ${(props) => {
    switch (props.size) {
      case "compact":
        return "200px";
      case "large":
        return "400px";
      default:
        return "330px";
    }
  }};

  ${(props) =>
    props.layout === "horizontal" &&
    `
    min-height: auto;
    flex: 1 1 100%;
    
    .card-image { width: 200px; flex-shrink: 0; }
    .card-content { flex: 1; }
  `}

  @media (max-width: ${breakpoints.md}) {
    flex: 1 1 100%;
    ${(props) =>
      props.layout === "horizontal" &&
      `
      flex-direction: column;
      .card-image { width: 100% !important; height: 150px !important; }
    `}
  }

  animation: ${animations.fadeIn} 0.3s ease;
`;

export const CardImage = styled.figure`
  background-color: blueviolet;
  margin: 0;
  height: 150px;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  padding: ${spacing.sm};
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${spacing.xl} ${spacing.md};
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px dashed #dee2e6;
`;

export const TwoColumnLayout = styled.div`
  display: flex;
  gap: ${spacing.xl};
  align-items: flex-start;

  > * {
    flex: 1;
  }

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    gap: ${spacing.md};
  }
`;

export const FlexContainer = styled.div<{
  direction?: "row" | "column";
  gap?: keyof typeof spacing;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => spacing[props.gap || "md"]};
`;

// TYPOGRAPHY

export const SectionTitle = styled.h2`
  margin: 0 0 ${spacing.sm} 0;
  font-size: 24px;
  font-weight: 600;

  @media (max-width: ${breakpoints.md}) {
    font-size: 20px;
  }
`;

export const SectionSubtitle = styled.h5`
  margin: 0 0 ${spacing.sm} 0;
  opacity: 0.5;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const SectionDescription = styled.p`
  color: #6c757d;
  font-size: 16px;
  margin: 0;
  line-height: 1.4;

  @media (max-width: ${breakpoints.md}) {
    font-size: 14px;
  }
`;

export const CardTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #212529;

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;

export const CardSubtitle = styled.span`
  opacity: 0.8;
  font-size: 14px;
  color: #6c757d;
`;

export const CardDescription = styled.p`
  opacity: 0.6;
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
  color: #495057;
`;

// BUTTONS (only used variants)

export const BaseButton = styled.button<{
  variant?: "primary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
}>`
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* Size variants */
  ${(props) => {
    switch (props.size) {
      case "small":
        return `padding: 8px 16px; font-size: 14px;`;
      case "large":
        return `padding: 16px 32px; font-size: 18px;`;
      default:
        return `padding: 12px 24px; font-size: 16px;`;
    }
  }}

  /* Color variants */
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return `
          background: rgb(128, 128, 240);
          color: white;
          &:hover { background: rgb(108, 108, 220); }
        `;
      case "outline":
        return `
          background: transparent;
          color: rgb(128, 128, 240);
          border: 1px solid rgb(128, 128, 240);
          &:hover { background: rgba(128, 128, 240, 0.1); }
        `;
      default: // ghost
        return `
          background: transparent;
          color: rgb(128, 128, 240);
          &:hover { background: rgba(128, 128, 240, 0.1); }
        `;
    }
  }}

  &:focus {
    outline: 2px solid rgb(128, 128, 240);
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
