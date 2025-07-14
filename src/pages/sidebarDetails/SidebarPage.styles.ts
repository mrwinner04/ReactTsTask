import styled from "styled-components";
import { spacing, breakpoints } from "../../styles/exportDesign";

export const StyledSectionContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: ${spacing.lg} 0;
`;

export const StyledSectionHeader = styled.div`
  background: blue;
  color: white;
  padding: ${spacing.lg} 0;
  margin-bottom: ${spacing.lg};
`;

export const StyledSectionTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 ${spacing.sm} 0;

  @media (max-width: ${breakpoints.md}) {
    font-size: 24px;
  }
`;

export const StyledSectionSubtitle = styled.p`
  font-size: 18px;
  opacity: 0.9;
  margin: 0;

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;

export const StyledCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing.lg};
  margin-bottom: ${spacing.lg};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing.md};
  }
`;

export const StyledCard = styled.div`
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

export const StyledCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${spacing.md};

  @media (max-width: ${breakpoints.md}) {
    height: 150px;
  }
`;

export const StyledCardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 ${spacing.sm} 0;
  color: #333;
`;

export const StyledCardSubtitle = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
`;

export const StyledCardDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 ${spacing.md} 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing.md};
`;

export const StyledCardBody = styled.div`
  margin-bottom: ${spacing.md};
`;

export const StyledCardCta = styled.div`
  margin-top: auto;
  display: flex;
  gap: ${spacing.xs};
  align-items: center;
`;

export const StyledNoCards = styled.div`
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
