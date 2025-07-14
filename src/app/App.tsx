import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { CardsProvider } from "../context/CardsContext";
import { routes } from "../config/routes";
import {
  GlobalStyle,
  StyledApp,
  StyledLoadingContainer,
  StyledLoadingSpinner,
} from "./app.styles";
import GlobalModal from "../components/modals/GlobalModal";

export const LoadingComponent: React.FC = () => (
  <StyledLoadingContainer>
    <StyledLoadingSpinner>Loading...</StyledLoadingSpinner>
  </StyledLoadingContainer>
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CardsProvider>
        <GlobalStyle />
        <Router>
          <StyledApp>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
            <GlobalModal />
          </StyledApp>
        </Router>
      </CardsProvider>
    </AuthProvider>
  );
};

export default App;
