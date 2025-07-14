import React from "react";
import { Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import CardDetail from "../pages/card-detail/CardDetail";
import SidebarPage from "../pages/sidebarDetails/SidebarPage";
import ProtectedRoute from "../components/routing/ProtectedRoute";

export interface RouteConfig {
  path: string;
  element: React.ReactElement;
  protected?: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: "/login",
    element: <Login />,
    protected: false,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    protected: true,
  },
  {
    path: "/card/:cardId",
    element: (
      <ProtectedRoute>
        <CardDetail />
      </ProtectedRoute>
    ),
    protected: true,
  },
  {
    path: "/sidebar/:section",
    element: (
      <ProtectedRoute>
        <SidebarPage />
      </ProtectedRoute>
    ),
    protected: true,
  },
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
    protected: false,
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
    protected: false,
  },
];
