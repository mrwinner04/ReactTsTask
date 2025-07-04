import React from "react";
import { useCardActions } from "../../../hooks/useCardActions";
import type { Card } from "../../../types/Types";
import styled from "styled-components";
import {
  BaseCard,
  BaseCardImage,
  BaseSpan,
  BaseButton,
  colors,
  spacing,
  breakpoints,
} from "../../../styles/exportDesign";

interface CardPresentationProps {
  card: Card;
  onEdit: () => void;
  onDelete: () => void;
  className?: string;
}

// Card wrapper that handles the overall structure
const CardWrapper = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

// Top section containing image and content side by side
const CardTopSection = styled.div<{
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

// Content area for text (titles, description)
const CardTextContent = styled.div`
  flex: 1;
  padding: ${spacing.sm};
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

// Clean card title component
const CardTitle = styled(BaseSpan)`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.text};
  display: block;
  margin-bottom: ${spacing.xs};

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;

// Clean card subtitle component
const CardSubtitle = styled(BaseSpan)`
  opacity: 0.8;
  font-size: 14px;
  color: ${colors.textMuted};
  display: block;
  margin-bottom: ${spacing.sm};
`;

// Clean card description
const CardDescription = styled.p`
  opacity: 0.6;
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
  color: ${colors.textSubtle};
  flex: 1;
`;

// Simple button group
const ButtonGroup = styled.div`
  display: flex;
  gap: ${spacing.xs};
  align-items: center;
`;

// Bottom buttons section with full-width separator
const CardBottomSection = styled.div`
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

const CardPresentation: React.FC<CardPresentationProps> = ({
  card,
  onEdit,
  onDelete,
  className,
}) => {
  // Use navigation utilities from useCardActions hook
  const { navigateToCard } = useCardActions();

  const handleCtaClick = () => {
    navigateToCard(card.id);
  };

  const hasImage = card.imageUrl && card.imageUrl.trim() !== "";

  // Determine layout based on className
  const layout: "vertical" | "horizontal" = className?.includes(
    "card--horizontal"
  )
    ? "horizontal"
    : "vertical";

  // Determine size based on content
  const size: "compact" | "default" | "large" = !hasImage
    ? "compact"
    : "default";

  const cardClasses = [className || "", !hasImage ? "no-image" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <CardWrapper className={cardClasses} $layout={layout} $size={size}>
      {/* Top Section: Image and Content Side by Side */}
      <CardTopSection $layout={layout}>
        {/* Card Image */}
        {hasImage && (
          <BaseCardImage $layout={layout}>
            <img src={card.imageUrl} alt={card.title || "Card image"} />
          </BaseCardImage>
        )}

        {/* Card Text Content */}
        <CardTextContent>
          <CardTitle>{card.title}</CardTitle>
          {card.subtitle && <CardSubtitle>{card.subtitle}</CardSubtitle>}
          <CardDescription>{card.description}</CardDescription>
        </CardTextContent>
      </CardTopSection>

      {/* Bottom Section: Buttons with Full-Width Separator */}
      <CardBottomSection>
        <BaseButton $variant="ghost" $size="md" onClick={handleCtaClick}>
          {card.ctaLabel || "Learn More"}
        </BaseButton>
        <ButtonGroup>
          <BaseButton
            $variant="ghost"
            $size="sm"
            onClick={onEdit}
            title="Edit card"
          >
            ✏️
          </BaseButton>
          <BaseButton
            $variant="ghost"
            $size="sm"
            onClick={onDelete}
            title="Delete card"
          >
            🗑️
          </BaseButton>
        </ButtonGroup>
      </CardBottomSection>
    </CardWrapper>
  );
};

export default CardPresentation;
