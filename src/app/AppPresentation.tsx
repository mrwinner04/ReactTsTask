import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

interface AppPresentationProps {
  children: React.ReactNode;
}

/**
 * App Presentation Component
 */

const GlobalStyle = createGlobalStyle`
  /* Reset and base styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  /* Utility class for horizontal cards */
  .max-width-100 {
    max-width: 100% !important;
  }
`;

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledLoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
`;

const StyledLoadingSpinner = styled.div`
  padding: 20px;
  font-size: 18px;
  color: #333;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin: 10px auto 0;
    border: 2px solid #f3f3f3;
    border-top: 2px solid #333;
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

// Loading component for protected routes
export const LoadingComponent: React.FC = () => (
  <StyledLoadingContainer>
    <StyledLoadingSpinner>Loading...</StyledLoadingSpinner>
  </StyledLoadingContainer>
);

const AppPresentation: React.FC<AppPresentationProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <StyledApp>{children}</StyledApp>
      </Router>
    </>
  );
};

export default AppPresentation;
