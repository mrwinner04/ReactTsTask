import styled from "styled-components";
import { Text } from "../../atoms";
import { spacing } from "../../../styles/tokens";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  width: 100%;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

export const ErrorText = styled(Text)`
  color: #dc3545;
`;
