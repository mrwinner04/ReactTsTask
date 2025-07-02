import React from "react";
import { useParams } from "react-router-dom";
import { useCards } from "../../hooks/useCards";
import type { Card } from "../../types/Types";
import SidebarPagePresentation from "./SidebarPagePresentation";

/**
 * Logic component for generic sidebar page
 */
const SidebarPageLogic: React.FC = () => {
  const { section } = useParams<{ section: string }>();
  const { sections } = useCards();

  // Find the section based on URL parameter
  const currentSection = sections.find(
    (s) =>
      s.name.toLowerCase() === section?.toLowerCase() ||
      s.title.toLowerCase().includes(section?.toLowerCase() || "")
  );

  // Get all
  const sectionCards: Card[] = currentSection?.cards || [];

  // Create a display title based on the section parameter
  const displayTitle = section
    ? section.charAt(0).toUpperCase() + section.slice(1)
    : currentSection?.title || "Section";

  return (
    <SidebarPagePresentation
      sectionCards={sectionCards}
      sectionTitle={displayTitle}
      sectionName={section || ""}
    />
  );
};

export default SidebarPageLogic;
