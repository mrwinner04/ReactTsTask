import styled from "styled-components";
import { BaseButton, colors, spacing } from "../../../styles/exportDesign";

export const StyledButton = styled(BaseButton)<{
  $hasIcon?: boolean;
  $loading?: boolean;
}>`
  ${(props) =>
    props.$hasIcon &&
    `
    gap: ${spacing.xs};
  `}

  ${(props) =>
    props.$loading &&
    `
    opacity: 0.7;
    cursor: not-allowed;
    position: relative;
    
    > span {
      visibility: hidden;
    }
  `}
  
  &:focus {
    outline-color: ${colors.primary};
    outline-width: 3px;
  }
`;

export const LoadingSpinner = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
