import styled from "styled-components";
import { breakpoints, spacing } from "../tokens";

/**
 * Essential Layout Components
 * Only components actually used in the codebase
 */

// Base section wrapper - used in card sections
export const BaseSection = styled.section`
  margin-bottom: ${spacing.lg};
  width: 100%;
`;

// Two-column layout utility - used in dashboard
export const TwoColumnLayout = styled.div`
  display: flex;
  gap: ${spacing.lg};
  align-items: flex-start;

  > * {
    flex: 1;
  }

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    gap: ${spacing.md};
  }
`;

// Empty state wrapper - used in card sections
export const EmptyState = styled.div`
  text-align: center;
  padding: ${spacing.lg} ${spacing.md};
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px dashed #dee2e6;
`;

// Responsive container - used in dashboard
export const ResponsiveContainer = styled.div<{
  $maxWidth?: "content" | "section";
  $padding?: keyof typeof spacing;
}>`
  width: 100%;
  max-width: ${(props) =>
    props.$maxWidth === "section" ? "1200px" : "1400px"};
  margin: 0 auto;
  padding: 0 ${(props) => spacing[props.$padding || "lg"]};

  @media (max-width: ${breakpoints.md}) {
    padding: 0 ${spacing.md};
  }
`;

// SIDEBAR COMPONENTS - used in Sidebar.tsx

export const BaseSidebar = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 140px;
  background-color: #f8f9fa;
  border-right: 1px solid #e9ecef;
  padding: 20px;
  overflow-y: auto;
  z-index: 100;
  transition: transform 0.3s ease;

  /* Tablet: collapse to icon-only */
  @media (max-width: ${breakpoints.lg}) {
    width: 80px;
    padding: 20px 10px;
  }

  /* Mobile: burger menu overlay */
  @media (max-width: ${breakpoints.md}) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 280px;
    z-index: 1000;
    padding: 80px 20px 20px;
    transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
    box-shadow: ${(props) =>
      props.$isOpen ? "2px 0 10px rgba(0,0,0,0.1)" : "none"};
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: ${breakpoints.md}) {
    display: block;
  }
`;

export const MobileOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

export const NavContainer = styled.nav`
  ul {
    padding: 0;
    margin: 0;
  }
`;

export const NavList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  list-style-type: none;
  margin: 8px 0;
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: #495057;
  text-decoration: none;
  transition: all 0.2s ease;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
    color: #007bff;
  }

  &:active,
  &.active {
    background-color: #007bff;
    color: white;
  }

  /* Tablet: center icons */
  @media (max-width: ${breakpoints.lg}) and (min-width: calc(${breakpoints.md} + 1px)) {
    justify-content: center;
    padding: 12px 8px;
    gap: 0;
  }

  /* Mobile: full width with labels */
  @media (max-width: ${breakpoints.md}) {
    padding: 16px 20px;
    gap: 16px;
  }
`;

export const NavIcon = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLabel = styled.span`
  font-size: 14px;
  font-weight: 500;

  /* Hide labels on tablet */
  @media (max-width: ${breakpoints.lg}) and (min-width: calc(${breakpoints.md} + 1px)) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #495057;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e9ecef;
  }

  @media (max-width: ${breakpoints.md}) {
    display: block;
  }
`;

// SECTION COMPONENTS - used in card sections

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.lg};
  margin-top: 25px;
  gap: ${spacing.md};

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SectionInfo = styled.div`
  flex: 1;

  @media (max-width: ${breakpoints.lg}) {
    text-align: center;
  }
`;

export const CardGrid = styled.div<{
  $variant?: "default" | "stack";
  $gap?: keyof typeof spacing;
}>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => spacing[props.$gap || "md"]};
  align-items: stretch;
  justify-content: center;

  ${(props) =>
    props.$variant === "default" &&
    `
    justify-content: flex-start;
    @media (max-width: ${breakpoints.md}) {
      justify-content: center;
    }
  `}

  ${(props) =>
    props.$variant === "stack" &&
    `
    flex-direction: column;
    align-items: center;
  `}

  /* Featured section special styling */
  .section--featured & {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${spacing.lg};
    justify-items: center;

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;
