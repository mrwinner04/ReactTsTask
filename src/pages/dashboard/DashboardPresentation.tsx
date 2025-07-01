import React from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import Hero from "../../components/layout/Hero";
import CardSection from "../../components/cards/card-section/CardSection";
import CardModal from "../../components/modals/CardModal";
import type { Section, Card } from "../../types";
import {
  TwoColumnLayout,
  ResponsiveContainer,
} from "../../styles/DesignSystem";
import styled from "styled-components";

interface DashboardPresentationProps {
  sections: Section[];
  isModalOpen: boolean;
  editingCard: Card | null;
  selectedSectionId: string;
  onCreateCard: (sectionId: string) => void;
  onEditCard: (card: Card) => void;
  onCloseModal: () => void;
}

/**
 * Dashboard Presentation Component - Using unified design system
 */

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const StyledDashboardMain = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;

  /* Mobile: sidebar is overlay, so main takes full width */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: aliceblue;

  /* Mobile: account for burger menu button */
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

const DashboardPresentation: React.FC<DashboardPresentationProps> = ({
  sections,
  isModalOpen,
  editingCard,
  selectedSectionId,
  onCreateCard,
  onEditCard,
  onCloseModal,
}) => {
  return (
    <StyledDashboard>
      <Header />

      <StyledDashboardMain>
        <Sidebar />

        <StyledContainer>
          <Hero />

          <ResponsiveContainer maxWidth="content" padding="xl">
            {sections.map((section) => {
              if (section.id === "events") {
                const otherSection = sections.find((s) => s.id === "other");
                if (otherSection) {
                  return (
                    <TwoColumnLayout key="events-other-row">
                      <CardSection
                        section={section}
                        onCreateCard={() => onCreateCard(section.id)}
                        onEditCard={onEditCard}
                      />
                      <CardSection
                        section={otherSection}
                        onCreateCard={() => onCreateCard(otherSection.id)}
                        onEditCard={onEditCard}
                      />
                    </TwoColumnLayout>
                  );
                }
              }

              if (section.id === "other") {
                return null;
              }

              // Render all other sections normally
              return (
                <CardSection
                  key={section.id}
                  section={section}
                  onCreateCard={() => onCreateCard(section.id)}
                  onEditCard={onEditCard}
                />
              );
            })}
          </ResponsiveContainer>
        </StyledContainer>
      </StyledDashboardMain>

      {/* Card Creation/Editing Modal */}
      <CardModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        sectionId={selectedSectionId}
        editCard={editingCard}
      />
    </StyledDashboard>
  );
};

export default DashboardPresentation;
