import React from "react";
import Button from "../../components/ui/Button";
import styled from "styled-components";
import { spacing } from "../../styles/tokens";

interface LoginPresentationProps {
  isLoading: boolean;
  onLogin: () => void;
}

/**
 * Login Presentation Component
 */

const StyledLoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: ${spacing.md};
`;

const StyledLoginContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: ${spacing.xl};
  width: 100%;
  max-width: 400px;

  @media (max-width: 480px) {
    padding: 24px;
    margin: ${spacing.md};
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border: 2px solid #000;
  }
`;

const StyledLoginHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing.xl};
`;

const StyledLoginTitle = styled.h1`
  color: #333;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 ${spacing.xs} 0;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const StyledLoginSubtitle = styled.p`
  color: #666;
  font-size: 16px;
  margin: 0;
`;

const StyledLoginContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledLoginDescription = styled.p`
  color: #555;
  font-size: 14px;
  text-align: center;
  margin: 0;
  line-height: 1.5;
`;

const StyledLoginButton = styled(Button)`
  margin-top: 16px;
  width: 100%;

  /* Loading state styling handled by Button component */
`;

const LoginPresentation: React.FC<LoginPresentationProps> = ({
  isLoading,
  onLogin,
}) => {
  return (
    <StyledLoginPage>
      <StyledLoginContainer>
        <StyledLoginHeader>
          <StyledLoginTitle>YaraPlus Dashboard</StyledLoginTitle>
          <StyledLoginSubtitle>Demo Authentication</StyledLoginSubtitle>
        </StyledLoginHeader>

        <StyledLoginContent>
          <StyledLoginDescription>
            Click the button below to authenticate with demo credentials
          </StyledLoginDescription>

          <StyledLoginButton
            variant="primary"
            onClick={onLogin}
            disabled={isLoading}
          >
            {isLoading ? "Authenticating..." : "Login with Demo Account"}
          </StyledLoginButton>
        </StyledLoginContent>
      </StyledLoginContainer>
    </StyledLoginPage>
  );
};

export default LoginPresentation;
