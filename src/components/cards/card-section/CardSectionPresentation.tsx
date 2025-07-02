import React from "react";
import CardComponent from "../card/CardComponent";
import type { Section, Card } from "../../../types/Types";
import {
  BaseSection,
  SectionHeader,
  SectionInfo,
  SectionTitle,
  SectionSubtitle,
  SectionDescription,
  CardGrid,
  EmptyState,
  BaseButton,
} from "../../../styles";
import styled from "styled-components";

interface CardSectionPresentationProps {
  section: Section;
  onCreateCard: () => void;
  createEditHandler: (card: Card) => () => void;
  createDeleteHandler: (cardId: string) => () => void;
}

// Styled components for card-specific elements
const StyledCreateCardButton = styled(BaseButton)`
  flex-shrink: 0;
  white-space: nowrap;
`;

const StyledEmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.6;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StyledEmptyTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #495057;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const StyledEmptyDescription = styled.p`
  color: #6c757d;
  font-size: 14px;
  margin: 0 0 20px 0;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const CardSectionPresentation: React.FC<CardSectionPresentationProps> = ({
  section,
  onCreateCard,
  createEditHandler,
  createDeleteHandler,
}) => {
  const renderEmptyState = () => (
    <EmptyState>
      <StyledEmptyIcon>📋</StyledEmptyIcon>
      <StyledEmptyTitle>No cards yet</StyledEmptyTitle>
      <StyledEmptyDescription>
        Create your first card to get started with this section.
      </StyledEmptyDescription>
      <BaseButton $variant="outline" $size="md" onClick={onCreateCard}>
        Create First Card
      </BaseButton>
    </EmptyState>
  );
  /**
   * Get card className based on section configuration
   */
  const getCardClassName = () => {
    const { cardLayout = "vertical" } = section;
    const baseClasses = [`section--${section.name}`];

    if (cardLayout === "horizontal") {
      baseClasses.push("card--horizontal", "max-width-100");
    }

    return baseClasses.join(" ");
  };

  /**
   * Render cards using the
   */
  const renderCards = () => {
    const cards = section.cards.map((card) => (
      <CardComponent
        key={card.id}
        card={card}
        onEdit={createEditHandler(card)}
        onDelete={createDeleteHandler(card.id)}
        className={getCardClassName()}
      />
    ));

    return (
      <CardGrid className={`card-grid card-grid--${section.layout}`}>
        {cards}
      </CardGrid>
    );
  };

  return (
    <BaseSection className={`section section--${section.name}`}>
      <SectionHeader>
        <SectionInfo>
          {section.subtitle && (
            <SectionSubtitle>{section.subtitle}</SectionSubtitle>
          )}
          <SectionTitle>{section.title}</SectionTitle>
          <SectionDescription>
            Manage your {section.title.toLowerCase()} content
          </SectionDescription>
        </SectionInfo>
        <StyledCreateCardButton
          $variant="primary"
          $size="md"
          onClick={onCreateCard}
        >
          + Create Card
        </StyledCreateCardButton>
      </SectionHeader>

      {/* Section content - cards or empty state */}
      {section.cards.length === 0 ? renderEmptyState() : renderCards()}
    </BaseSection>
  );
};

export default CardSectionPresentation;
