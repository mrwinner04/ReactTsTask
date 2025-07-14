import { useAuth } from "../../../hooks/useAuth";

export const useHeader = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
    }
  };

  return {
    user,
    handleLogout,
  };
};
