import React, { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Hero from "../components/layout/Hero";
import CardSection from "../components/cards/card-section/CardSection";
import CardModal from "../components/forms/CardModal";
import { useCards } from "../hooks/useCards";
import type { Card } from "../types";
import "./Dashboard.css";

/**
 * Dashboard Page Component
 * Matches exactly the HTML structure provided
 */
const Dashboard: React.FC = () => {
  const { sections } = useCards();

  // Modal state creating/editing cards
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCard, setEditingCard] = useState<Card | null>(null);
  const [selectedSectionId, setSelectedSectionId] = useState<string>("");

  /**
   * Handle create new card
   */
  const handleCreateCard = (sectionId: string) => {
    setSelectedSectionId(sectionId);
    setEditingCard(null);
    setIsModalOpen(true);
  };

  /**
   * Handle editing an existing card
   */
  const handleEditCard = (card: Card) => {
    setSelectedSectionId(card.sectionId);
    setEditingCard(card);
    setIsModalOpen(true);
  };

  /**
   * Handle closing the modal
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCard(null);
    setSelectedSectionId("");
  };

  return (
    <div>
      <Header />

      <main>
        <Sidebar />

        <div className="container">
          <Hero />

          <div className="content">
            {sections.map((section) => (
              <CardSection
                key={section.id}
                section={section}
                onCreateCard={() => handleCreateCard(section.id)}
                onEditCard={handleEditCard}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Card Creation/Editing Modal */}
      <CardModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        sectionId={selectedSectionId}
        editCard={editingCard}
      />
    </div>
  );
};

export default Dashboard;
