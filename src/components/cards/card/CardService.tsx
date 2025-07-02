import type {
  Section,
  Card,
  CardFormData,
  SectionLayout,
  CardLayout,
  CardSize,
} from "../../../types/Types";
import dashboardData from "../../../data/dashboardData.json";

export class CardService {
  /**
   * Load data from JSON
   */
  static getInitialSectionsJson(): Section[] {
    return dashboardData.sections.map((section) => ({
      id: section.id,
      name: section.name,
      title: section.title,
      subtitle: section.subtitle,
      layout: section.layout as SectionLayout,
      cardLayout: section.cardLayout as CardLayout,
      cardSize: section.cardSize as CardSize,
      cards: section.cards.map((card) => ({
        id: card.id,
        title: card.title,
        subtitle: card.subtitle,
        description: card.description,
        content: card.content,
        imageUrl: card.imageUrl,
        ctaLabel: card.ctaLabel,
        sectionId: card.sectionId,
      })),
    }));
  }

  /**
   * Generate card ID
   */
  static generateCardId(): string {
    return `card_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Create a new card object with given data
   */
  static createCard(sectionId: string, cardData: CardFormData): Card {
    return {
      id: this.generateCardId(),
      title: cardData.title || "Untitled Card",
      subtitle: cardData.subtitle,
      description: cardData.description,
      imageUrl: cardData.imageUrl,
      ctaLabel: cardData.ctaLabel,
      sectionId,
    };
  }

  /**
   * Add a new card to a specific section
   */
  static addCardToSection(
    sections: Section[],
    sectionId: string,
    cardData: CardFormData
  ): Section[] {
    const newCard = this.createCard(sectionId, cardData);

    return sections.map((section) =>
      section.id === sectionId
        ? { ...section, cards: [...section.cards, newCard] }
        : section
    );
  }

  /**
   * Update an existing card in sections
   */
  static updateCardInSections(
    sections: Section[],
    cardId: string,
    cardData: CardFormData
  ): Section[] {
    return sections.map((section) => ({
      ...section,
      cards: section.cards.map((card) =>
        card.id === cardId
          ? {
              ...card,
              title:
                cardData.title !== undefined
                  ? cardData.title || "Untitled Card"
                  : card.title,
              subtitle:
                cardData.subtitle !== undefined
                  ? cardData.subtitle
                  : card.subtitle,
              description:
                cardData.description !== undefined
                  ? cardData.description
                  : card.description,
              imageUrl:
                cardData.imageUrl !== undefined
                  ? cardData.imageUrl
                  : card.imageUrl,
              ctaLabel:
                cardData.ctaLabel !== undefined
                  ? cardData.ctaLabel
                  : card.ctaLabel,
            }
          : card
      ),
    }));
  }

  /**
   * Delete a card from sections
   */
  static deleteCardFromSections(
    sections: Section[],
    cardId: string
  ): Section[] {
    return sections.map((section) => ({
      ...section,
      cards: section.cards.filter((card) => card.id !== cardId),
    }));
  }

  /**
   * Find a specific card by ID across all sections
   */
  static findCardById(sections: Section[], cardId: string): Card | undefined {
    for (const section of sections) {
      const card = section.cards.find((c) => c.id === cardId);
      if (card) return card;
    }
    return undefined;
  }
}

export default CardService;
