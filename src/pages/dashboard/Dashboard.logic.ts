import { useCards } from "../../hooks/useCards";

export const useDashboard = () => {
  const { sections } = useCards();

  return {
    sections,
  };
};
