import React from "react";
import "./Header.css";

interface HeaderPresentationProps {
  onLogout: () => void;
}

/**
 * Header Presentation Component
 */
const HeaderPresentation: React.FC<HeaderPresentationProps> = ({
  onLogout,
}) => {
  return (
    <header>
      <span className="logo">
        <a href="#" rel="noopener noreferrer">
          YaraLogo
        </a>
      </span>
      <div>
        <select name="options" id="opt">
          <option selected value="one">
            One
          </option>
          <option value="two">Two</option>
          <option value="three">Three</option>
          <option value="four">Four</option>
        </select>

        <button type="button" className="help-icon">
          ??
        </button>
        <button type="button" className="profile-icon">
          P
        </button>
        <button type="button" className="menu-icon" onClick={onLogout}>
          M
        </button>
      </div>
    </header>
  );
};

export default HeaderPresentation;
