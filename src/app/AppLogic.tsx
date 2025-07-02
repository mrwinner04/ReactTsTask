import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { CardsProvider } from "../context/CardsContext";
import { useAuth } from "../hooks/useAuth";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import CardDetail from "../pages/card-detail/CardDetail";
import SidebarPage from "../pages/sidebarDetails/SidebarPage";
import AppPresentation, { LoadingComponent } from "./AppPresentation";

/**
 * Protected Route Component
 */
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingComponent />;
  }

  // Redirect to login if not authenticated
  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

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
      <Route
        path="/card/:cardId"
        element={
          <ProtectedRoute>
            <CardDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sidebar/:section"
        element={
          <ProtectedRoute>
            <SidebarPage />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

const AppLogic: React.FC = () => {
  return (
    <AuthProvider>
      <CardsProvider>
        <AppPresentation>
          <AppRoutes />
        </AppPresentation>
      </CardsProvider>
    </AuthProvider>
  );
};

export default AppLogic;
