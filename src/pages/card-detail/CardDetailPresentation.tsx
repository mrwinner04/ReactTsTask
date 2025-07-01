import React from "react";
import styled from "styled-components";
import Button from "../../components/ui/Button";
import type { Card } from "../../types";

interface CardDetailPresentationProps {
  card: Card | undefined;
  cardId: string;
  onBack: () => void;
}

/**
 * Card Detail Presentation Component
 */

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 40px 20px;
`;

const StyledContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const StyledHeader = styled.div`
  padding: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`;

const StyledTitle = styled.h1`
  margin: 0 0 10px 0;
  font-size: 32px;
  font-weight: 700;
`;

const StyledSubtitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  opacity: 0.9;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledBody = styled.div`
  padding: 40px;
`;

const StyledDescription = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #495057;
  margin-bottom: 30px;
`;

const StyledMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const StyledMetaItem = styled.div`
  h4 {
    margin: 0 0 5px 0;
    font-size: 14px;
    font-weight: 600;
    color: #6c757d;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    font-size: 16px;
    color: #212529;
  }
`;

const StyledActions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  border-top: 1px solid #e9ecef;
  padding-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledNotFound = styled.div`
  text-align: center;
  padding: 60px 20px;

  h1 {
    color: #dc3545;
    margin-bottom: 20px;
  }

  p {
    color: #6c757d;
    margin-bottom: 30px;
  }
`;

const CardDetailPresentation: React.FC<CardDetailPresentationProps> = ({
  card,
  cardId,
  onBack,
}) => {
  if (!card) {
    return (
      <StyledContainer>
        <StyledContent>
          <StyledNotFound>
            <h1>Card Not Found</h1>
            <p>The card with ID "{cardId}" doesn't exist.</p>
            <Button variant="primary" onClick={onBack}>
              Back to Dashboard
            </Button>
          </StyledNotFound>
        </StyledContent>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledContent>
        <StyledHeader>
          <StyledTitle>{card.title}</StyledTitle>
          {card.subtitle && <StyledSubtitle>{card.subtitle}</StyledSubtitle>}
        </StyledHeader>

        {card.imageUrl && (
          <StyledImage>
            <img
              src={card.imageUrl}
              alt={card.title}
              onError={(e) => {
                e.currentTarget.src = "../src/assets/soil.jpg";
              }}
            />
          </StyledImage>
        )}

        <StyledBody>
          {card.description && (
            <StyledDescription>
              <p>{card.description}</p>
            </StyledDescription>
          )}

          <StyledMeta>
            <StyledMetaItem>
              <h4>Card ID</h4>
              <p>{card.id}</p>
            </StyledMetaItem>
            <StyledMetaItem>
              <h4>Section</h4>
              <p>{card.sectionId}</p>
            </StyledMetaItem>
            {card.ctaLabel && (
              <StyledMetaItem>
                <h4>CTA Label</h4>
                <p>{card.ctaLabel}</p>
              </StyledMetaItem>
            )}
          </StyledMeta>

          <StyledActions>
            <Button variant="outline" onClick={onBack}>
              Back to Dashboard
            </Button>
          </StyledActions>
        </StyledBody>
      </StyledContent>
    </StyledContainer>
  );
};

export default CardDetailPresentation;
