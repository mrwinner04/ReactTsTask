import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

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

  return {
    isOpen,
    toggleSidebar,
    closeSidebar,
    handleHomeClick,
    handleEventsClick,
    handleNewsClick,
  };
};
