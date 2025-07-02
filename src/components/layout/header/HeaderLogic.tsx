import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import HeaderPresentation from "./HeaderPresentation";

/**
 * Header Logic Component
 */
const HeaderLogic: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
    }
  };

  return <HeaderPresentation onLogout={handleLogout} />;
};

export default HeaderLogic;
