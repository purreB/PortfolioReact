import React from 'react';
import navPic from '../assets/navPic.png';
import style from '../styleModules/Navbar.module.css';

function Navbar() {
  return (
    <>
      <nav>
        <div className={style.group1}>
          <img src={navPic} alt="" className={style.navPic} />
          <a href="" className={style.aTag}>
            About Me
          </a>
          <a href="">Skills</a>
          <a href="">Portfolio</a>
          <a href="">Contact Me</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
