import React from "react";
import { useCardSection } from "./CardSection.logic";
import CardItem from "../card/Card";
import type { Section } from "../../../types/Types";
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
} from "../../../styles/exportDesign";
import {
  StyledCreateCardButton,
  StyledEmptyIcon,
  StyledEmptyTitle,
  StyledEmptyDescription,
} from "./CardSection.styles";

interface CardSectionProps {
  section: Section;
}

const CardSection: React.FC<CardSectionProps> = ({ section }) => {
  const { handleCreateCard } = useCardSection(section);

  const renderEmptyState = () => (
    <EmptyState>
      <StyledEmptyIcon>📋</StyledEmptyIcon>
      <StyledEmptyTitle>No cards yet</StyledEmptyTitle>
      <StyledEmptyDescription>
        Create your first card to get started with this section.
      </StyledEmptyDescription>
      <BaseButton $variant="outline" $size="md" onClick={handleCreateCard}>
        Create First Card
      </BaseButton>
    </EmptyState>
  );

  const getCardClassName = () => {
    const { cardLayout = "vertical" } = section;
    const baseClasses = [`section--${section.name}`];

    if (cardLayout === "horizontal") {
      baseClasses.push("card--horizontal", "max-width-100");
    }

    return baseClasses.join(" ");
  };

  const renderCards = () => {
    const cards = section.cards.map((card) => (
      <CardItem key={card.id} card={card} className={getCardClassName()} />
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
          onClick={handleCreateCard}
        >
          + Create Card
        </StyledCreateCardButton>
      </SectionHeader>

      {section.cards.length === 0 ? renderEmptyState() : renderCards()}
    </BaseSection>
  );
};

export default CardSection;
