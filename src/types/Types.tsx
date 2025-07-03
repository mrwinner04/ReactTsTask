// User types for authentication
export interface User {
  id: string;
  email: string;
  name: string;
}

// Card types for the card system
export interface Card {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  content?: string;
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

/**
 * Layout for sections and cards
 */
export type SectionLayout =
  | "default" // Standard responsive grid
  | "stack" // Vertical stack (for horizontal cards)
  | "full-width" // Cards take full width
  | "two-column"; // Side-by-side layout

export type CardLayout =
  | "vertical" // Standard card (image top, content bottom)
  | "horizontal" // Image left, content right
  | "compact"; // Smaller version

export type CardSize = "compact" | "default" | "large";

export interface Section {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  cards: Card[];
  // properties for design
  layout?: SectionLayout;
  cardLayout?: CardLayout;
  cardSize?: CardSize;
}

// Context types
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
