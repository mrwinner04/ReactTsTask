import styled from "styled-components";
import { colors, spacing } from "../../../styles/tokens";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const MainContent = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${colors.background};
  margin-left: 140px;

  @media (max-width: 980px) {
    margin-left: 80px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: ${spacing.md};
  }
`;

export const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
`;

export const LoadingSpinner = styled.div`
  padding: ${spacing.md};
  font-size: 18px;
  color: ${colors.text};
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin: ${spacing.xs} auto 0;
    border: 2px solid ${colors.border};
    border-top: 2px solid ${colors.primary};
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
