import styled from "styled-components";
import { Button, Text } from "../../components/atoms";
import { spacing } from "../../styles/tokens";

export const StyledLoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: ${spacing.md};
`;

export const StyledLoginContainer = styled.div`
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

export const StyledLoginHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing.xl};
`;

export const StyledLoginContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LoginDescription = styled(Text)`
  text-align: center;
  line-height: 1.5;
`;

export const StyledLoginButton = styled(Button)`
  margin-top: 16px;
  width: 100%;

  /* Loading state styling handled by Button component */
`;
