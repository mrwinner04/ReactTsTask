import React from "react";
import { useCardDetail } from "./CardDetail.logic";
import { Button } from "../../components/atoms";
import {
  StyledContainer,
  StyledContent,
  StyledHeader,
  StyledTitle,
  StyledSubtitle,
  StyledImage,
  StyledBody,
  StyledDescription,
  StyledMeta,
  StyledMetaItem,
  StyledActions,
  StyledNotFound,
} from "./CardDetail.styles";

const CardDetail: React.FC = () => {
  const { card, cardId, handleBack } = useCardDetail();

  if (!card) {
    return (
      <StyledContainer>
        <StyledContent>
          <StyledNotFound>
            <h1>Card Not Found</h1>
            <p>The card with ID "{cardId}" doesn't exist.</p>
            <Button variant="primary" onClick={handleBack}>
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
            <Button variant="outline" onClick={handleBack}>
              Back to Dashboard
            </Button>
          </StyledActions>
        </StyledBody>
      </StyledContent>
    </StyledContainer>
  );
};

export default CardDetail;
