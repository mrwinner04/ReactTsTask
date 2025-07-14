import styled from "styled-components";
import {
  breakpoints,
  spacing,
  colors,
  borderRadius,
  typography,
} from "../tokens";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${spacing.md};
`;

export const ModalContent = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.lg};
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: ${breakpoints.md}) {
    max-width: 90vw;
    margin: ${spacing.md};
  }
`;

export const ModalHeader = styled.div`
  padding: ${spacing.lg};
  border-bottom: 1px solid ${colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: ${typography.sizes.lg};
  font-weight: ${typography.weights.semibold};
  color: ${colors.text};
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${typography.sizes.lg};
  cursor: pointer;
  color: ${colors.textMuted};
  padding: ${spacing.xs};
  border-radius: ${borderRadius.sm};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.background};
    color: ${colors.text};
  }

  &:focus {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

export const ModalBody = styled.form`
  padding: ${spacing.lg};
`;

export const ModalFooter = styled.div`
  padding: ${spacing.lg};
  border-top: 1px solid ${colors.border};
  display: flex;
  gap: ${spacing.sm};
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${spacing.lg};
`;

export const FormLabel = styled.label<{
  $required?: boolean;
}>`
  display: block;
  font-size: ${typography.sizes.sm};
  font-weight: ${typography.weights.medium};
  color: ${colors.text};
  margin-bottom: ${spacing.xs};

  ${(props) =>
    props.$required &&
    `
    &::after {
      content: " *";
      color: #dc3545;
    }
  `}
`;

export const FormInput = styled.input<{
  $error?: boolean;
}>`
  width: 100%;
  padding: ${spacing.sm};
  border: 1px solid ${(props) => (props.$error ? "#dc3545" : colors.border)};
  border-radius: ${borderRadius.sm};
  font-size: ${typography.sizes.sm};
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  &::placeholder {
    color: ${colors.textMuted};
  }
`;

// Form textarea
export const FormTextarea = styled.textarea<{
  $error?: boolean;
}>`
  width: 100%;
  padding: ${spacing.sm};
  border: 1px solid ${(props) => (props.$error ? "#dc3545" : colors.border)};
  border-radius: ${borderRadius.sm};
  font-size: ${typography.sizes.sm};
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  &::placeholder {
    color: ${colors.textMuted};
  }
`;
