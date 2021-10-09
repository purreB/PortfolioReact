import React from 'react';
import './Navbar.module.css';

function Navbar() {
  return (
    <>
      <nav className="navbar is-black">
        <div className="navbar-menu">
          <div className="navbar-end">
            <a href="#about" className="navbar-item">
              About me
            </a>
            <a href="#portfolio" className="navbar-item">
              Portfolio
            </a>
            <a href="#skills" className="navbar-item">
              Skills
            </a>
            <a href="contact" className="navbar-item">
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
