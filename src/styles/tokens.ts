import { keyframes } from "styled-components";

export const breakpoints = {
  md: "768px",
  lg: "980px",
} as const;

export const spacing = {
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "40px",
} as const;

export const colors = {
  primary: "#007bff",
  primaryHover: "#0056b3",
  border: "#e1dede",
  text: "#212529",
  textMuted: "#6c757d",
  textSubtle: "#495057",
  background: "#f8f9fa",
  white: "#ffffff",
} as const;

export const animations = {
  fadeIn: keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `,
} as const;

export const typography = {
  sizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
  },
  weights: {
    medium: 500,
    semibold: 600,
  },
  lineHeights: {
    normal: 1.4,
  },
} as const;

export const borderRadius = {
  sm: "6px",
  md: "10px",
  lg: "12px",
} as const;

export const shadows = {
  sm: "0 2px 4px rgba(0, 123, 255, 0.2)",
  md: "0 4px 8px rgba(0, 123, 255, 0.3)",
} as const;
