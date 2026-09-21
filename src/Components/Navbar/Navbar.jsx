import React, { useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  const scrollToSection = (sectionId) => {
    closeMenu(); // Closes mobile menu after selecting an item

    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className="nav-logo" />
      
      <img 
        src={menu_open} 
        onClick={openMenu} 
        alt="Open Menu" 
        className='nav-mob-open' 
      />

      <ul ref={menuRef} className="nav-menu">
        <img 
          src={menu_close} 
          onClick={closeMenu} 
          alt="Close Menu" 
          className="nav-mob-close" 
        />
        
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About Me</li>
        <li onClick={() => scrollToSection("certifications")}>Certifications</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

     <a href="/Resume_2026.pdf" download="Resume_2026.pdf" className="nav-connect" >
        Download Resume
      </a>
    </div>
  );
};

export default Navbar;