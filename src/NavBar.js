import React from "react";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {

  const[ menu, setMenu] = React.useState(false)

  function toggleMenu(){
    setMenu(!menu)
    console.log("toggled!")
  }

  return (
    // <div className="nav-bar-container">
    //   <nav >
    //     <h2>Veronica</h2>
    //    
    //     <ul >
    //       <li>Home</li>
    //       <li>My Services</li>
    //       <li>About Me</li>
    //       <li>My Projects</li>
    //     </ul>
    //   </nav>
    // </div>
    <nav className="nav-bar">
     <h2 className="logo">Veronica</h2>
      <FaBars className="hamburger-icon" onClick={toggleMenu}/>
      <ul className={` ${menu ? "open" : ""}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>

        
      </ul>
      </nav>
  );
}
