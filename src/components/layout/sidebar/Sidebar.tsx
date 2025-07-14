import React from "react";
import { useSidebar } from "./Sidebar.logic";
import {
  BaseSidebar,
  MobileMenuButton,
  MobileOverlay,
  NavContainer,
  NavList,
  NavItem,
  NavLink,
  NavIcon,
  NavLabel,
  CloseButton,
} from "./Sidebar.styles";

const Sidebar: React.FC = () => {
  const {
    isOpen,
    toggleSidebar,
    closeSidebar,
    handleHomeClick,
    handleEventsClick,
    handleNewsClick,
  } = useSidebar();

  return (
    <>
      <MobileMenuButton onClick={toggleSidebar}>☰</MobileMenuButton>

      <MobileOverlay $isOpen={isOpen} onClick={closeSidebar} />

      <BaseSidebar $isOpen={isOpen}>
        <CloseButton onClick={closeSidebar}>✕</CloseButton>

        <NavContainer>
          <NavList>
            <NavItem>
              <NavLink onClick={handleHomeClick}>
                <NavIcon>🏠</NavIcon>
                <NavLabel>Home</NavLabel>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleEventsClick}>
                <NavIcon>📅</NavIcon>
                <NavLabel>Events</NavLabel>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleNewsClick}>
                <NavIcon>📰</NavIcon>
                <NavLabel>News</NavLabel>
              </NavLink>
            </NavItem>
          </NavList>
        </NavContainer>
      </BaseSidebar>
    </>
  );
};

export default Sidebar;
