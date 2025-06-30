import React, { createContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import type { Section, Card, CardFormData, CardsContextType } from "../types";
import dashboardData from "../data/dashboardData.json";

const CardsContext = createContext<CardsContextType | undefined>(undefined);

// Provider component props
interface CardsProviderProps {
  children: ReactNode;
}

// Load data from JSON
const initialSections: Section[] = dashboardData.sections;

/**
 * CardsProvider Component
 */
export const CardsProvider: React.FC<CardsProviderProps> = ({ children }) => {
  const [sections, setSections] = useState<Section[]>(initialSections);

  /**
   * Add a new card to a specific section
   */
  const addCard = useCallback((sectionId: string, cardData: CardFormData) => {
    const now = new Date().toISOString();
    const newCard: Card = {
      id: `card_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...cardData,
      sectionId,
      createdAt: now,
      updatedAt: now,
    };

    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, cards: [...section.cards, newCard] }
          : section
      )
    );
  }, []);

  /**
   * Update an existing card
   */
  const updateCard = useCallback((cardId: string, cardData: CardFormData) => {
    const now = new Date().toISOString();
    setSections((prev) =>
      prev.map((section) => ({
        ...section,
        cards: section.cards.map((card) =>
          card.id === cardId
            ? {
                ...card,
                ...cardData,
                updatedAt: now,
              }
            : card
        ),
      }))
    );
  }, []);

  /**
   * Delete a card by ID
   */
  const deleteCard = useCallback((cardId: string) => {
    setSections((prev) =>
      prev.map((section) => ({
        ...section,
        cards: section.cards.filter((card) => card.id !== cardId),
      }))
    );
  }, []);

  /**
   * Get a specific card by ID
   */
  const getCardById = useCallback(
    (cardId: string): Card | undefined => {
      for (const section of sections) {
        const card = section.cards.find((c) => c.id === cardId);
        if (card) return card;
      }
      return undefined;
    },
    [sections]
  );

  const contextValue: CardsContextType = {
    sections,
    addCard,
    updateCard,
    deleteCard,
    getCardById,
  };

  return (
    <CardsContext.Provider value={contextValue}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContext;
