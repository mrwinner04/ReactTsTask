import React from "react";
import { useAuth } from "../../hooks/useAuth";
import styled from "styled-components";
import BackgroundImage from "../../assets/overviewBackground.jpg";

/**
 * Hero Layout Component
 */

const StyledHero = styled.section`
  color: white;
  padding: 40px;
  min-height: 100px;
  background-color: green;
  background-image: url(${BackgroundImage});
  background-size: cover;

  * {
    margin: 0;
    padding: 0;
  }
`;

const StyledHeroTitle = styled.h1`
  margin-bottom: 10px;
`;

const StyledHeroDescription = styled.p`
  max-width: 70%;
`;

const Hero: React.FC = () => {
  const { user } = useAuth();

  return (
    <StyledHero>
      <StyledHeroTitle>Welcome {user?.name || "User"}</StyledHeroTitle>
      <StyledHeroDescription>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, qui.
        Eveniet eum, facere ex fugiat deleniti.
      </StyledHeroDescription>
    </StyledHero>
  );
};

export default Hero;
