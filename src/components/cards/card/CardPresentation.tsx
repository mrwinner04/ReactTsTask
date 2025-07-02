import React from "react";
import { useNavigate } from "react-router-dom";
import type { Card } from "../../../types/Types";
import {
  BaseCard,
  CardImage,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardDescription,
  FlexContainer,
  BaseButton,
} from "../../../styles/DesignSystem";
import styled from "styled-components";

interface CardPresentationProps {
  card: Card;
  onEdit: () => void;
  onDelete: () => void;
  className?: string;
}

/**
 * Card Presentation Component
 */

const StyledCardCta = styled.div`
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid rgb(225, 222, 222);
`;

const StyledCtaButton = styled(BaseButton)`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const StyledActionGroup = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const CardPresentation: React.FC<CardPresentationProps> = ({
  card,
  onEdit,
  onDelete,
  className,
}) => {
  const navigate = useNavigate();

  const handleCtaClick = () => {
    // Navigate to card details for all cards
    navigate(`/card/${card.id}`);
  };

  const isHorizontal = className?.includes("card--horizontal");
  const hasImage = card.imageUrl && card.imageUrl.trim() !== "";

  // Determine layout based on className
  let layout: "vertical" | "horizontal" = "vertical";
  if (className?.includes("card--horizontal")) {
    layout = "horizontal";
  }

  // Determine size based on content or className
  const size: "compact" | "default" | "large" = !hasImage
    ? "compact"
    : "default";

  const cardClasses = [className || "", !hasImage ? "no-image" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <BaseCard className={cardClasses} layout={layout} size={size}>
      {isHorizontal ? (
        // Horizontal layout using design system
        <FlexContainer className="flex-container" gap="lg">
          {hasImage && (
            <CardImage className="card-image">
              <img src={card.imageUrl} alt={card.title || "Card image"} />
            </CardImage>
          )}
          <CardContent className="card-content">
            <CardTitle>{card.title}</CardTitle>
            {card.subtitle && <CardSubtitle>{card.subtitle}</CardSubtitle>}
            <CardDescription>
              {card.description || card.content}
            </CardDescription>
          </CardContent>
        </FlexContainer>
      ) : (
        // Standard vertical layout
        <>
          {hasImage && (
            <CardImage className="card-image">
              <img src={card.imageUrl} alt={card.title || "Card image"} />
            </CardImage>
          )}
          <CardContent className="card-content">
            <CardTitle>{card.title}</CardTitle>
            {card.subtitle && <CardSubtitle>{card.subtitle}</CardSubtitle>}
            <CardDescription>
              {card.description || card.content}
            </CardDescription>
          </CardContent>
        </>
      )}
      <StyledCardCta className="card__cta">
        <StyledCtaButton variant="ghost" size="medium" onClick={handleCtaClick}>
          {card.ctaLabel || "Button"}
        </StyledCtaButton>
        <StyledActionGroup>
          <BaseButton
            variant="ghost"
            size="small"
            onClick={onEdit}
            title="Edit card"
          >
            ✏️
          </BaseButton>
          <BaseButton
            variant="ghost"
            size="small"
            onClick={onDelete}
            title="Delete card"
          >
            🗑️
          </BaseButton>
        </StyledActionGroup>
      </StyledCardCta>
    </BaseCard>
  );
};

export default CardPresentation;
