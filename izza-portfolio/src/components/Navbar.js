import React from 'react';
import './navbar.css';

export default function Navbar(){
  return (
    <header className="nav">
      <div className="nav-inner container">
        <div className="brand">Izza Shahzad</div>
        <nav className="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
