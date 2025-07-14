import React from "react";
import { useSidebarPage } from "./SidebarPage.logic";
import { BaseButton, ResponsiveContainer } from "../../styles/exportDesign";
import {
  StyledSectionContainer,
  StyledSectionHeader,
  StyledSectionTitle,
  StyledSectionSubtitle,
  StyledCardsGrid,
  StyledCard,
  StyledCardImage,
  StyledCardTitle,
  StyledCardSubtitle,
  StyledCardDescription,
  StyledCardHeader,
  StyledCardBody,
  StyledCardCta,
  StyledNoCards,
} from "./SidebarPage.styles";

const SidebarPage: React.FC = () => {
  const {
    sectionCards,
    sectionTitle,
    sectionName,
    handleEditCard,
    handleDeleteCard,
    navigateToDashboard,
    navigateToCard,
  } = useSidebarPage();

  const handleBackToDashboard = () => {
    navigateToDashboard();
  };

  const handleCardClick = (cardId: string) => {
    navigateToCard(cardId);
  };

  return (
    <StyledSectionContainer>
      <StyledSectionHeader>
        <ResponsiveContainer>
          <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
          <StyledSectionSubtitle>
            Browse all {sectionName.toLowerCase()}
          </StyledSectionSubtitle>
        </ResponsiveContainer>
      </StyledSectionHeader>

      <ResponsiveContainer>
        {sectionCards.length > 0 ? (
          <StyledCardsGrid>
            {sectionCards.map((card) => (
              <StyledCard
                key={card.id}
                onClick={() => handleCardClick(card.id)}
              >
                {card.imageUrl && (
                  <StyledCardImage
                    src={card.imageUrl}
                    alt={card.title || "Card image"}
                  />
                )}

                <StyledCardHeader>
                  <StyledCardTitle>{card.title}</StyledCardTitle>
                  {card.subtitle && (
                    <StyledCardSubtitle>{card.subtitle}</StyledCardSubtitle>
                  )}
                </StyledCardHeader>

                <StyledCardBody>
                  <StyledCardDescription>
                    {card.description}
                  </StyledCardDescription>
                </StyledCardBody>

                <StyledCardCta>
                  {card.ctaLabel && (
                    <BaseButton $variant="primary" $size="sm">
                      {card.ctaLabel}
                    </BaseButton>
                  )}
                  <BaseButton
                    $variant="ghost"
                    $size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditCard(card);
                    }}
                    title="Edit card"
                  >
                    ✏️
                  </BaseButton>
                  <BaseButton
                    $variant="ghost"
                    $size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteCard(card.id, card.title);
                    }}
                    title="Delete card"
                  >
                    🗑️
                  </BaseButton>
                </StyledCardCta>
              </StyledCard>
            ))}
          </StyledCardsGrid>
        ) : (
          <StyledNoCards>
            <h3>No {sectionTitle} Available</h3>
            <p>
              There are currently no {sectionName.toLowerCase()} to display.
            </p>
          </StyledNoCards>
        )}

        <BaseButton
          $variant="outline"
          $size="md"
          onClick={handleBackToDashboard}
        >
          ← Back to Dashboard
        </BaseButton>
      </ResponsiveContainer>
    </StyledSectionContainer>
  );
};

export default SidebarPage;
