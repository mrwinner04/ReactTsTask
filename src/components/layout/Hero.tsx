import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Text } from "../atoms";
import styled from "styled-components";
import { spacing } from "../../styles/tokens";
import BackgroundImage from "/assets/overviewBackground.jpg";

const StyledHero = styled.section`
  color: white;
  padding: ${spacing.xl};
  min-height: 100px;
  background-color: green;
  background-image: url(${BackgroundImage});
  background-size: cover;

  * {
    margin: 0;
    padding: 0;
  }
`;

const HeroDescription = styled(Text)`
  max-width: 70%;
`;

const Hero: React.FC = () => {
  const { user } = useAuth();

  return (
    <StyledHero>
      <Text variant="h1" color="white" weight="semibold" size="xl">
        Welcome {user?.name || "User"}
      </Text>
      <HeroDescription variant="body" color="white" size="md">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, qui.
        Eveniet eum, facere ex fugiat deleniti.
      </HeroDescription>
    </StyledHero>
  );
};

export default Hero;
