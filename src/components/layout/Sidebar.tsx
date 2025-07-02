import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "../../styles";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  // Navigation handlers
  const handleHomeClick = () => {
    navigate("/dashboard");
    closeSidebar();
  };

  const handleEventsClick = () => {
    navigate("/sidebar/events");
    closeSidebar();
  };

  const handleNewsClick = () => {
    navigate("/sidebar/news");
    closeSidebar();
  };

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
