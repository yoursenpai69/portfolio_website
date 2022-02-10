import React from "react";
import "../Styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar-nav">
        <div className="nav-line">
          <svg height="300" width="100">
            <line
              className="line-main"
              x1="70"
              y1="0"
              x2="70"
              y2="205"
              stroke="#ffb7c5"
            />
          </svg>
        </div>
        <ul className="navbar-links">
          <li className="nav-item">
            <a href="#about-me" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#my-work" className="nav-link">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a href="#my-contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item button">
            <a
              href="https://drive.google.com/uc?export=download&id=1764gdBNgigY3sh3Oq9YJpMcJyif1zgSn"
              download
              className="nav-link button-neon"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
