import React from 'react';

function Navbar() {
  function toggleDropdown() {
    const myNav = document.querySelector('#my-nav');
    const burger = document.querySelector('#burger');
    myNav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
  }

  return (
    <>
      <nav className="navbar is-fixed-top is-black" role="navigation">
        <div className="navbar-menu " id="my-nav">
          <div className="navbar-end">
            <a href="#about" className="navbar-item" onClick={toggleDropdown}>
              About me
            </a>
            <a
              href="#portfolio"
              className="navbar-item"
              onClick={toggleDropdown}
            >
              Portfolio
            </a>
            <a href="#skills" className="navbar-item" onClick={toggleDropdown}>
              Skills
            </a>
            <a
              href="#learning"
              className="navbar-item"
              onClick={toggleDropdown}
            >
              Current Learning
            </a>
          </div>
        </div>
        <a
          onClick={toggleDropdown}
          role="button"
          id="burger"
          className="navbar-burger "
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </nav>
    </>
  );
}

export default Navbar;
