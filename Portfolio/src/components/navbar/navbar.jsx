import React, { useState } from "react";
import styles from "./navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contactus">Contact</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1gILAbMkL3d1ZEqth9DAYLpe1a87vjfI-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
            >
              View Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};