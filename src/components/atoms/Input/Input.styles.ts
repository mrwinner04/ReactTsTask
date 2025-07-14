import styled from "styled-components";
import { colors, spacing, borderRadius } from "../../../styles/tokens";

export const StyledInput = styled.input`
  width: 100%;
  padding: ${spacing.sm};
  border: 1px solid ${colors.border};
  border-radius: ${borderRadius.sm};
  font-size: 16px;
  color: ${colors.text};
  background-color: ${colors.white};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }

  &:disabled {
    background-color: ${colors.background};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${colors.textMuted};
  }
`;
