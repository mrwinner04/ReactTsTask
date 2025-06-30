import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CardsProvider } from "./context/CardsContext";
import { useAuth } from "./hooks/useAuth";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

/**
 * Protected Route Component
 * Redirects to login if user is not authenticated
 */
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

/**
 * App Routes Component
 * Contains all the routing logic - separated for cleaner code
 */
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

/**
 * Main App Component
 * Sets up providers and routing for the entire application
 *
 * Features implemented:
 * - React Router for navigation
 * - Context API for state management (Auth + Cards)
 * - Protected routes with authentication
 * - Loading states
 * - Clean separation of concerns
 */
const App: React.FC = () => {
  return (
    <AuthProvider>
      <CardsProvider>
        <Router>
          <div className="app">
            <AppRoutes />
          </div>
        </Router>
      </CardsProvider>
    </AuthProvider>
  );
};

export default App;
