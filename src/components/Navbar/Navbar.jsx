import React, { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on link click
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 10);
    }
  };

  return (
    <header
      className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
      role="banner"
    >
      <div className="navbar__inner container">
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, "#hero")}
          aria-label="Winfred Edube — home"
        >
          <span className="navbar__logo-mark">WE</span>
        </a>

        <nav
          className={`navbar__nav${menuOpen ? " navbar__nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn--primary btn--sm navbar__cta"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Hire Me
          </a>
        </nav>

        <button
          className={`navbar__burger${menuOpen ? " navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
