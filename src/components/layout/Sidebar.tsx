import React from "react";
import "./Sidebar.css";

/**
 * Sidebar Layout Component
 */
const Sidebar: React.FC = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>Home</li>
          <li>Events</li>
          <li>News</li>
          <li>Podcasts</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
