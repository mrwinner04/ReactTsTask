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
  type?: string;
  imageUrl?: string;
  ctaLabel?: string;
  sectionId: string;
  createdAt: string;
  updatedAt: string;
}

// Section types for organizing cards
export interface Section {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  cards: Card[];
}

// Form types for validation
export interface CardFormData {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ctaLabel: string;
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

// Component prop types
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}
