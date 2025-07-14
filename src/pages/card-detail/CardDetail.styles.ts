import styled from "styled-components";
import { spacing } from "../../styles/tokens";

export const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 40px ${spacing.md};
`;

export const StyledContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const StyledHeader = styled.div`
  padding: ${spacing.xl};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  margin: 0 0 10px 0;
  font-size: 32px;
  font-weight: 700;
`;

export const StyledSubtitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  opacity: 0.9;
`;

export const StyledImage = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledBody = styled.div`
  padding: ${spacing.xl};
`;

export const StyledDescription = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #495057;
  margin-bottom: 30px;
`;

export const StyledMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spacing.md};
  margin-bottom: 30px;
  padding: ${spacing.md};
  background-color: #f8f9fa;
  border-radius: 8px;
`;

export const StyledMetaItem = styled.div`
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

export const StyledActions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  border-top: 1px solid #e9ecef;
  padding-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledNotFound = styled.div`
  text-align: center;
  padding: 60px ${spacing.md};

  h1 {
    color: #dc3545;
    margin-bottom: ${spacing.md};
  }

  p {
    color: #6c757d;
    margin-bottom: 30px;
  }
`;
