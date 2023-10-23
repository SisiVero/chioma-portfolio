import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Link as ScrollLink } from 'react-scroll';
import './NavBar.css';

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

 

  return (
    <nav className="nav-bar">
      <h2 className="logo">Veronica</h2>
      <FaBars className="hamburger-icon" onClick={toggleMenu} />
      <ul className={` ${menu ? 'open' : ''}`}>
        <li>
          <ScrollLink
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Projects
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}
