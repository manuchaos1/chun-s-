import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/about', 'About Me'],
  ['/projects', 'Projects'],
  ['/services', 'Services'],
  ['/references', 'References'],
  ['/contact', 'Contact Me'],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="navbar" aria-label="Primary navigation">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">CHUN</span>
          <span className="brand-copy">
            <strong>Van Trung Nguyen</strong>
            <small>Portfolio</small>
          </span>
        </NavLink>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span><span></span><span></span>
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
