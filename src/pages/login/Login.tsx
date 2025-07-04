import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoginPresentation from "./LoginPresentation";

/**
 * Login Component
 */
const Login: React.FC = () => {
  const { user, login, isLoading } = useAuth();

  // Redirect
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // Handle login with credentials
  const handleLogin = async () => {
    const success = await login("demo@example.com", "password123");

    if (!success) {
      alert("Authentication failed. Please try again.");
    }
  };

  // Pass data and handlers to presentation
  return <LoginPresentation isLoading={isLoading} onLogin={handleLogin} />;
};

export default Login;
