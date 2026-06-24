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
  const [activeId, setActiveId] = useState("hero");

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Active section tracking */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        }),
      { threshold: 0.35, rootMargin: "-10% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 10);
  };

  return (
    <>
      <header
        className={[
          "navbar",
          scrolled ? "navbar--scrolled" : "",
          menuOpen ? "navbar--open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        role="banner"
      >
        <div className="navbar__inner container">
          <a
            href="#hero"
            className="navbar__logo"
            onClick={(e) => go(e, "#hero")}
            aria-label="Top"
          >
            <span className="navbar__wordmark">Winfred Edube</span>
            <span className="navbar__accent-dot" aria-hidden="true" />
          </a>

          {/* Desktop nav */}
          <nav className="navbar__nav" aria-label="Main navigation">
            <ul className="navbar__links">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <li key={href}>
                    <a
                      href={href}
                      className={`navbar__link${isActive ? " navbar__link--active" : ""}`}
                      onClick={(e) => go(e, href)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                      {isActive && (
                        <span
                          className="navbar__link-indicator"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="#contact"
              className="btn btn--primary btn--sm navbar__cta"
              onClick={(e) => go(e, "#contact")}
            >
              Hire Me
            </a>
          </nav>

          {/* Burger / close toggle */}
          <button
            className={`navbar__burger${menuOpen ? " navbar__burger--open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`navbar__backdrop${menuOpen ? " navbar__backdrop--visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-drawer"
        className={`navbar__drawer${menuOpen ? " navbar__drawer--open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="navbar__drawer-header">
          <span className="navbar__drawer-wordmark">Winfred Edube</span>
          <button
            className="navbar__drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <ul className="navbar__drawer-links">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`navbar__drawer-link${isActive ? " navbar__drawer-link--active" : ""}`}
                  onClick={(e) => go(e, href)}
                >
                  <span>{label}</span>
                  {isActive && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="btn btn--primary navbar__drawer-cta"
          onClick={(e) => go(e, "#contact")}
        >
          Hire Me
        </a>

        <p className="navbar__drawer-foot">Available · Nairobi, Kenya</p>
      </div>
    </>
  );
}
