import React from "react";
import { useCard } from "./Card.logic";
import { useCardActions } from "../../../hooks/useCardActions";
import type { Card } from "../../../types/Types";
import { BaseButton } from "../../../styles/exportDesign";
import {
  CardWrapper,
  CardTopSection,
  CardTextContent,
  CardTitle,
  CardSubtitle,
  CardDescription,
  ButtonGroup,
  CardBottomSection,
  BaseCardImage,
} from "./Card.styles";

interface CardItemProps {
  card: Card;
  className?: string;
}

const CardItem: React.FC<CardItemProps> = ({ card, className }) => {
  const { handleEdit, handleDelete } = useCard({
    card,
    className,
  });

  const { navigateToCard } = useCardActions();

  const handleCtaClick = () => {
    navigateToCard(card.id);
  };

  const hasImage = card.imageUrl && card.imageUrl.trim() !== "";

  // Use layout from card data, map compact to vertical, fallback to vertical if not specified
  const layout: "vertical" | "horizontal" =
    card.layout === "horizontal" ? "horizontal" : "vertical";

  const size: "compact" | "default" | "large" = !hasImage
    ? "compact"
    : "default";

  const cardClasses = [className || "", !hasImage ? "no-image" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <CardWrapper className={cardClasses} $layout={layout} $size={size}>
      <CardTopSection $layout={layout}>
        {hasImage && (
          <BaseCardImage $layout={layout}>
            <img src={card.imageUrl} alt={card.title || "Card image"} />
          </BaseCardImage>
        )}

        <CardTextContent $layout={layout}>
          <CardTitle>{card.title}</CardTitle>
          {card.subtitle && <CardSubtitle>{card.subtitle}</CardSubtitle>}
          <CardDescription>{card.description}</CardDescription>
        </CardTextContent>
      </CardTopSection>

      <CardBottomSection>
        <BaseButton $variant="ghost" $size="md" onClick={handleCtaClick}>
          {card.ctaLabel || "Learn More"}
        </BaseButton>
        <ButtonGroup>
          <BaseButton
            $variant="ghost"
            $size="sm"
            onClick={handleEdit}
            title="Edit card"
          >
            ✏️
          </BaseButton>
          <BaseButton
            $variant="ghost"
            $size="sm"
            onClick={handleDelete}
            title="Delete card"
          >
            🗑️
          </BaseButton>
        </ButtonGroup>
      </CardBottomSection>
    </CardWrapper>
  );
};

export default CardItem;
