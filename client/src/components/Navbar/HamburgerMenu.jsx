import React from "react";
import "./Navbar.css";

const HamburgerMenu = ({ isOpen, toggleMenu }) => (
  <div className="hamburger-menu" onClick={toggleMenu}>
    <div className={`hamburger-icon ${isOpen ? "open" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default HamburgerMenu;
