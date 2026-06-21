import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Work',       href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 10);
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`} role="banner">
      <div className="navbar__inner container">

        {/* Logo — name as wordmark */}
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')} aria-label="Go to top">
          <span className="navbar__logo-name">Winfred Edube</span>
          <span className="navbar__logo-dot" aria-hidden="true" />
        </a>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="navbar__link" onClick={(e) => handleNavClick(e, href)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary btn--sm navbar__cta" onClick={(e) => handleNavClick(e, '#contact')}>
            Hire Me
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="navbar__drawer-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="navbar__drawer-link" onClick={(e) => handleNavClick(e, href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn--primary navbar__drawer-cta" onClick={(e) => handleNavClick(e, '#contact')}>
          Hire Me
        </a>
      </div>
    </header>
  );
}
