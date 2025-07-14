import React from "react";
import { useHeader } from "./Header.logic";
import {
  StyledHeader,
  StyledLogo,
  HeaderActions,
  StyledTextButton,
} from "./Header.styles";

const Header: React.FC = () => {
  const { handleLogout } = useHeader();

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
        <StyledTextButton href="#" role="button" onClick={handleLogout}>
          Log Out
        </StyledTextButton>
      </HeaderActions>
    </StyledHeader>
  );
};

export default Header;
