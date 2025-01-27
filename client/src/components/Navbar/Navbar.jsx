import React, { useState } from "react";
import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
     
      <div className="logo">
        <a href="#home">Bidding APP </a>
      </div>

      
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="/catalogue">Catalogue</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
