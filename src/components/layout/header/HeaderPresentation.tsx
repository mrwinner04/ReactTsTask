import React from "react";
import styled from "styled-components";
import { spacing } from "../../../styles/tokens";

interface HeaderPresentationProps {
  onLogout: () => void;
}

/**
 * Header Presentation Component
 */

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: blue;
  padding: ${spacing.xs};
`;

const StyledLogo = styled.div`
  background-color: white;
  width: 100px;
  height: 20px;
  align-self: center;
  margin-left: ${spacing.xs};

  a {
    text-decoration: none;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  color: white;
`;

const StyledTextButton = styled.a`
  height: 30px;
  margin: ${spacing.xs};
  margin-right: ${spacing.md};
  text-align: center;
  cursor: pointer;
  border: none;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 ${spacing.xs};
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`;

const HeaderPresentation: React.FC<HeaderPresentationProps> = ({
  onLogout,
}) => {
  return (
    <StyledHeader>
      <StyledLogo>
        <a href="#" rel="noopener noreferrer">
          YaraLogo
        </a>
      </StyledLogo>
      <HeaderActions>
        <StyledTextButton href="#" role="button">
          Help
        </StyledTextButton>
        <StyledTextButton href="#" role="button">
          Profile
        </StyledTextButton>
        <StyledTextButton href="#" role="button" onClick={onLogout}>
          Log Out
        </StyledTextButton>
      </HeaderActions>
    </StyledHeader>
  );
};

export default HeaderPresentation;
