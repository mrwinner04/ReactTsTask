import React, { createContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import type {
  Section,
  Card,
  CardFormData,
  CardsContextType,
} from "../types/Types";
import CardService from "../components/cards/card/CardService";

const CardsContext = createContext<CardsContextType | undefined>(undefined);

interface CardsProviderProps {
  children: ReactNode;
}

export const CardsProvider: React.FC<CardsProviderProps> = ({ children }) => {
  const [sections, setSections] = useState<Section[]>(
    CardService.getInitialSectionsJson()
  );

  /**
   * Add
   */
  const addCard = useCallback((sectionId: string, cardData: CardFormData) => {
    setSections((prev) =>
      CardService.addCardToSection(prev, sectionId, cardData)
    );
  }, []);

  /**
   * Update
   */
  const updateCard = useCallback((cardId: string, cardData: CardFormData) => {
    setSections((prev) =>
      CardService.updateCardInSections(prev, cardId, cardData)
    );
  }, []);

  /**
   * Delete
   */
  const deleteCard = useCallback((cardId: string) => {
    setSections((prev) => CardService.deleteCardFromSections(prev, cardId));
  }, []);

  /**
   * Get card by ID
   */
  const getCardById = useCallback(
    (cardId: string): Card | undefined => {
      return CardService.findCardById(sections, cardId);
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
