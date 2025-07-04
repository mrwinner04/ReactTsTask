import React from "react";
import type { Card } from "../../types/Types";
import CardModal from "../../components/modals/CardModal";
import styled from "styled-components";
import {
  BaseButton,
  ResponsiveContainer,
  spacing,
  breakpoints,
} from "../../styles/exportDesign";

interface SidebarPagePresentationProps {
  sectionCards: Card[];
  sectionTitle: string;
  sectionName: string;
  isModalOpen: boolean;
  editingCard: Card | null;
  selectedSectionId: string;
  onEditCard: (card: Card) => void;
  onDeleteCard: (cardId: string, cardTitle?: string) => void;
  onCloseModal: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToCard: (cardId: string) => void;
}

/**
 * Sidebar Page Presentation Component
 */

const StyledSectionContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: ${spacing.lg} 0;
`;

const StyledSectionHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: ${spacing.lg} 0;
  margin-bottom: ${spacing.lg};
`;

const StyledSectionTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 ${spacing.sm} 0;

  @media (max-width: ${breakpoints.md}) {
    font-size: 24px;
  }
`;

const StyledSectionSubtitle = styled.p`
  font-size: 18px;
  opacity: 0.9;
  margin: 0;

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;

const StyledCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing.lg};
  margin-bottom: ${spacing.lg};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing.md};
  }
`;

const StyledCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: ${spacing.lg};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing.md};
  }
`;

const StyledCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${spacing.md};

  @media (max-width: ${breakpoints.md}) {
    height: 150px;
  }
`;

const StyledCardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 ${spacing.sm} 0;
  color: #333;
`;

const StyledCardDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 ${spacing.md} 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StyledCardCta = styled.div`
  margin-top: auto;
  display: flex;
  gap: ${spacing.xs};
  align-items: center;
`;

const StyledNoCards = styled.div`
  text-align: center;
  padding: ${spacing.lg};
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 20px;
    color: #495057;
    margin-bottom: ${spacing.md};
  }

  p {
    color: #6c757d;
    margin-bottom: ${spacing.lg};
  }
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing.md};
`;

const StyledCardBody = styled.div`
  margin-bottom: ${spacing.md};
`;

const StyledCardSubtitle = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
`;

const SidebarPagePresentation: React.FC<SidebarPagePresentationProps> = ({
  sectionCards,
  sectionTitle,
  sectionName,
  isModalOpen,
  editingCard,
  selectedSectionId,
  onEditCard,
  onDeleteCard,
  onCloseModal,
  onNavigateToDashboard,
  onNavigateToCard,
}) => {
  const handleBackToDashboard = () => {
    onNavigateToDashboard();
  };

  const handleCardClick = (cardId: string) => {
    onNavigateToCard(cardId);
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
                      onEditCard(card);
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
                      onDeleteCard(card.id, card.title);
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

      {/* Card Editing Modal */}
      <CardModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        sectionId={selectedSectionId}
        editCard={editingCard}
      />
    </StyledSectionContainer>
  );
};

export default SidebarPagePresentation;
