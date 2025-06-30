import React from "react";
import type { Card } from "../../../types";
import "./CardComponent.css";

interface CardPresentationProps {
  card: Card;
  onEdit: () => void;
  onDelete: () => void;
}

/**
 * Card Presentation Component
 */
const CardPresentation: React.FC<CardPresentationProps> = ({
  card,
  onEdit,
  onDelete,
}) => {
  return (
    <article className="card">
      <figure>
        <img src={card.imageUrl} alt="image" />
      </figure>
      <div className="card__content">
        <span className="card__content-title">{card.title}</span>
        <span className="card__content-subtitle">{card.subtitle}</span>
        <p className="card__content-description">
          {card.description || card.content}
        </p>
      </div>
      <div className="card__cta">
        <button type="button">{card.ctaLabel || "Button"}</button>
        <button type="button" onClick={onEdit}>
          ✏️
        </button>
        <button type="button" onClick={onDelete}>
          🗑️
        </button>
      </div>
    </article>
  );
};

export default CardPresentation;
