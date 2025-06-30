import React from "react";
import Button from "../../ui/Button";
import CardComponent from "../card/CardComponent";
import type { Section, Card } from "../../../types";
import "./CardSection.css";

interface CardSectionPresentationProps {
  section: Section;
  onCreateCard: () => void;
  createEditHandler: (card: Card) => () => void;
  createDeleteHandler: (cardId: string) => () => void;
}

/**
 * CardSection Presentation Component
 */
const CardSectionPresentation: React.FC<CardSectionPresentationProps> = ({
  section,
  onCreateCard,
  createEditHandler,
  createDeleteHandler,
}) => {
  const renderEmptyState = () => (
    <div className="empty-state">
      <div className="empty-icon">📋</div>
      <h3 className="empty-title">No cards yet</h3>
      <p className="empty-description">
        Create your first card to get started with this section.
      </p>
      <Button
        variant="outline"
        size="medium"
        onClick={onCreateCard}
        className="empty-create-button"
      >
        Create First Card
      </Button>
    </div>
  );

  // Render function for cards grid
  const renderCardsGrid = () => (
    <div className="cards-grid">
      {section.cards.map((card) => (
        <CardComponent
          key={card.id}
          card={card}
          onEdit={createEditHandler(card)}
          onDelete={createDeleteHandler(card.id)}
        />
      ))}
    </div>
  );

  return (
    <section className="card-section">
      <div className="section-header">
        <div className="section-info">
          {section.subtitle && (
            <h5 className="section-subtitle">{section.subtitle}</h5>
          )}
          <h2 className="section-title">{section.title}</h2>
          <p className="section-description">
            Manage your {section.title.toLowerCase()} content
          </p>
        </div>
        <Button
          variant="primary"
          onClick={onCreateCard}
          className="create-card-button"
        >
          + Create Card
        </Button>
      </div>

      {/* Section Content */}
      <div className="cards-container">
        {section.cards.length === 0 ? renderEmptyState() : renderCardsGrid()}
      </div>
    </section>
  );
};

export default CardSectionPresentation;
