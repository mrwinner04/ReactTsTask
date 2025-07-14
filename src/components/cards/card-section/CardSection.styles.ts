import styled from "styled-components";
import { BaseButton } from "../../../styles/exportDesign";

export const StyledCreateCardButton = styled(BaseButton)`
  flex-shrink: 0;
  white-space: nowrap;
`;

export const StyledEmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.6;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const StyledEmptyTitle = styled.h3`
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

export const StyledEmptyDescription = styled.p`
  color: #6c757d;
  font-size: 14px;
  margin: 0 0 20px 0;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
