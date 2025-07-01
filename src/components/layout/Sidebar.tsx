import React, { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/DesignSystem";

const StyledSidebar = styled.aside<{ isOpen: boolean }>`
  width: 140px;
  padding: 20px;
  background-color: snow;
  border-right: 1px solid rgb(242, 235, 235);
  transition: all 0.3s ease;
  position: relative;

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
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
    box-shadow: ${(props) =>
      props.isOpen ? "2px 0 10px rgba(0,0,0,0.1)" : "none"};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const MobileMenuButton = styled.button`
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
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${breakpoints.md}) {
    display: block;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover,
    &:active {
      transform: none;
    }
  }
`;

const MobileOverlay = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const SidebarNav = styled.nav`
  ul {
    padding: 0;
    margin: 0;
  }
`;

const NavList = styled.ul`
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  list-style-type: none;
  margin: 8px 0;
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: #495057;
  text-decoration: none;
  transition: all 0.2s ease;
  border-radius: 8px;
  cursor: pointer;
  position: relative;

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
  @media (max-width: ${breakpoints.lg}) and (min-width: ${breakpoints.md +
    1}px) {
    justify-content: center;
    padding: 12px 8px;
    gap: 0;
  }

  /* Mobile: full width with labels */
  @media (max-width: ${breakpoints.md}) {
    padding: 16px 20px;
    gap: 16px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const NavIcon = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;

  @media (max-width: ${breakpoints.md}) {
    font-size: 22px;
  }
`;

const NavLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;

  /* Hide on tablet, show on mobile and desktop */
  @media (max-width: ${breakpoints.lg}) and (min-width: ${breakpoints.md +
    1}px) {
    display: none;
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;

const CloseButton = styled.button`
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

  &:hover {
    background-color: #e9ecef;
  }

  @media (max-width: ${breakpoints.md}) {
    display: block;
  }
`;

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <MobileMenuButton onClick={toggleSidebar}>☰</MobileMenuButton>

      <MobileOverlay isOpen={isOpen} onClick={closeSidebar} />

      <StyledSidebar isOpen={isOpen}>
        <CloseButton onClick={closeSidebar}>✕</CloseButton>

        <SidebarNav>
          <NavList>
            <NavItem>
              <NavLink onClick={closeSidebar}>
                <NavIcon>🏠</NavIcon>
                <NavLabel>Home</NavLabel>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={closeSidebar}>
                <NavIcon>📅</NavIcon>
                <NavLabel>Events</NavLabel>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={closeSidebar}>
                <NavIcon>📰</NavIcon>
                <NavLabel>News</NavLabel>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={closeSidebar}>
                <NavIcon>🎧</NavIcon>
                <NavLabel>Podcasts</NavLabel>
              </NavLink>
            </NavItem>
          </NavList>
        </SidebarNav>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
