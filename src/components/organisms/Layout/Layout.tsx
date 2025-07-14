import React from "react";
import { useLayout } from "./Layout.logic";
import Header from "../../layout/header/Header";
import Sidebar from "../../layout/sidebar/Sidebar";
import {
  LayoutWrapper,
  MainContent,
  ContentArea,
  LoadingContainer,
  LoadingSpinner,
} from "./Layout.styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isLoading } = useLayout();

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner>Loading...</LoadingSpinner>
      </LoadingContainer>
    );
  }

  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        <Sidebar />
        <ContentArea>{children}</ContentArea>
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout;
