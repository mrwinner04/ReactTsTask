export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Card {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  ctaLabel?: string;
  sectionId: string;
}

export interface CardFormData {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  ctaLabel?: string;
}

export type SectionLayout = "default" | "stack" | "full-width" | "two-column";

export type CardLayout = "vertical" | "horizontal" | "compact";

export type CardSize = "compact" | "default" | "large";

export interface Section {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  cards: Card[];
  layout?: SectionLayout;
  cardLayout?: CardLayout;
  cardSize?: CardSize;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export interface CardsContextType {
  sections: Section[];
  addCard: (sectionId: string, cardData: CardFormData) => void;
  updateCard: (cardId: string, cardData: CardFormData) => void;
  deleteCard: (cardId: string) => void;
  getCardById: (cardId: string) => Card | undefined;
}
