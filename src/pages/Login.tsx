import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/ui/Button";
import "./Login.css";

/**
 * Simple Login Page Component
 * Just a button for demo authentication - keeping it simple
 */
const Login: React.FC = () => {
  const { user, login, isLoading } = useAuth();

  // If user is already authenticated, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // Simple demo login with dummy credentials
  const handleLogin = async () => {
    const success = await login("demo@example.com", "password123");

    if (!success) {
      alert("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">YaraPlus Dashboard</h1>
          <p className="login-subtitle">Demo Authentication</p>
        </div>

        <div className="login-content">
          <p className="login-description">
            Click the button below to authenticate with demo credentials
          </p>

          <Button
            variant="primary"
            size="large"
            onClick={handleLogin}
            disabled={isLoading}
            className="login-button"
          >
            {isLoading ? "Authenticating..." : "Login with Demo Account"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
