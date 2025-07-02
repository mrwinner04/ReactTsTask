import { useContext } from "react";
import CardsContext from "../context/CardsContext";
import type { CardsContextType } from "../types/Types";

export const useCards = (): CardsContextType => {
  const context = useContext(CardsContext);

  if (context === undefined) {
    throw new Error("useCards must be used within a CardsProvider");
  }

  return context;
};
