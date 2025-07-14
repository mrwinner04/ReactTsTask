import styled from "styled-components";
import {
  BaseCard,
  BaseSpan,
  colors,
  spacing,
  breakpoints,
} from "../../../styles/exportDesign";

export const CardWrapper = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const CardTopSection = styled.div<{
  $layout?: "vertical" | "horizontal";
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.$layout === "horizontal" ? "row" : "column"};
  flex: 1;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const CardTextContent = styled.div`
  flex: 1;
  padding: ${spacing.sm};
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

export const CardTitle = styled(BaseSpan)`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.text};
  display: block;
  margin-bottom: ${spacing.xs};

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;

export const CardSubtitle = styled(BaseSpan)`
  opacity: 0.8;
  font-size: 14px;
  color: ${colors.textMuted};
  display: block;
  margin-bottom: ${spacing.sm};
`;

export const CardDescription = styled.p`
  opacity: 0.6;
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
  color: ${colors.textSubtle};
  flex: 1;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${spacing.xs};
  align-items: center;
`;

export const CardBottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.md};
  border-top: 1px solid ${colors.border};
  margin-top: auto;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: ${spacing.sm};
    align-items: stretch;
  }
`;

export const BaseCardImage = styled.figure<{
  $layout?: "vertical" | "horizontal";
  $height?: string;
}>`
  margin: 0;
  height: ${(props) => props.$height || "150px"};
  width: ${(props) => (props.$layout === "horizontal" ? "200px" : "100%")};
  flex-shrink: 0;
  overflow: hidden;
  background-color: #f8f9fa;

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
