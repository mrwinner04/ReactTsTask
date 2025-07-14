import React from "react";
import { Navigate } from "react-router-dom";
import { useLogin } from "./Login.logic";
import { Text } from "../../components/atoms";
import {
  StyledLoginPage,
  StyledLoginContainer,
  StyledLoginHeader,
  StyledLoginContent,
  LoginDescription,
  StyledLoginButton,
} from "./Login.styles";

const Login: React.FC = () => {
  const { shouldRedirect, isLoading, handleLogin } = useLogin();

  if (shouldRedirect) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <StyledLoginPage>
      <StyledLoginContainer>
        <StyledLoginHeader>
          <Text variant="h1" weight="semibold" size="xl">
            YaraPlus Dashboard
          </Text>
          <Text variant="body" color="muted" size="md">
            Demo Authentication
          </Text>
        </StyledLoginHeader>

        <StyledLoginContent>
          <LoginDescription variant="body" color="subtle" size="sm">
            Click the button below to authenticate with demo credentials
          </LoginDescription>

          <StyledLoginButton
            variant="primary"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Authenticating..." : "Login with Demo Account"}
          </StyledLoginButton>
        </StyledLoginContent>
      </StyledLoginContainer>
    </StyledLoginPage>
  );
};

export default Login;
