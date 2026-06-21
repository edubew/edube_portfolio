import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

const CODE_LINES = [
  { text: "def process_mpesa_callback(payload)", color: "#96584E" },
  { text: "  order = Order.find_by(", color: "#B8956A" },
  { text: "    checkout_id: payload[:id]", color: "#D4B896" },
  { text: "  )", color: "#B8956A" },
  { text: "  order.update!(status: :paid)", color: "#8C7048" },
  { text: "  OrderMailer", color: "#B8956A" },
  { text: "    .receipt(order)", color: "#D4B896" },
  { text: "    .deliver_later", color: "#8C7048" },
  { text: "end", color: "#96584E" },
  { text: "", color: "" },
  { text: "const useCart = () => {", color: "#8C7048" },
  { text: "  const [items, setItems]", color: "#B8956A" },
  { text: "    = useState([])", color: "#D4B896" },
  { text: "  const addItem = (product) => {", color: "#B8956A" },
  { text: "    setItems(p => [...p, product])", color: "#D4B896" },
  { text: "  }", color: "#B8956A" },
  { text: "  return { items, addItem }", color: "#8C7048" },
  { text: "}", color: "#8C7048" },
];

function Typewriter() {
  const [visibleLines, setVisibleLines] = useState([
    { text: "", color: CODE_LINES[0].color },
  ]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);

  /* Cursor blink */
  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  /* Typewriter tick */
  useEffect(() => {
    if (paused) {
      const id = setTimeout(() => {
        setVisibleLines([{ text: "", color: CODE_LINES[0].color }]);
        setLineIdx(0);
        setCharIdx(0);
        setPaused(false);
      }, 2200);
      return () => clearTimeout(id);
    }

    const currentLine = CODE_LINES[lineIdx];
    if (!currentLine) return;

    if (charIdx < currentLine.text.length) {
      const id = setTimeout(() => setCharIdx((c) => c + 1), 28);
      return () => clearTimeout(id);
    }

    /* Line complete */
    const nextIdx = lineIdx + 1;
    if (nextIdx >= CODE_LINES.length) {
      const id = setTimeout(() => setPaused(true), 1000);
      return () => clearTimeout(id);
    }

    const id = setTimeout(() => {
      setVisibleLines((prev) => {
        const updated = [...prev];
        updated[lineIdx] = { text: currentLine.text, color: currentLine.color };
        return [...updated, { text: "", color: CODE_LINES[nextIdx].color }];
      });
      setLineIdx(nextIdx);
      setCharIdx(0);
    }, 55);
    return () => clearTimeout(id);
  }, [lineIdx, charIdx, paused]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  const displayLines = visibleLines.map((line, i) => ({
    ...line,
    text:
      i === lineIdx
        ? (CODE_LINES[lineIdx]?.text.slice(0, charIdx) ?? "")
        : line.text,
  }));

  return (
    <div
      className="terminal"
      role="img"
      aria-label="Code snippet demonstrating Winfred's work"
    >
      {/* Window chrome */}
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" aria-hidden="true" />
        <span
          className="terminal__dot terminal__dot--amber"
          aria-hidden="true"
        />
        <span
          className="terminal__dot terminal__dot--green"
          aria-hidden="true"
        />
        <span className="terminal__filename">portfolio.rb</span>
      </div>

      {/* Line numbers + code */}
      <div className="terminal__body" ref={containerRef}>
        <div className="terminal__gutter" aria-hidden="true">
          {displayLines.map((_, i) => (
            <span key={i} className="terminal__lineno">
              {i + 1}
            </span>
          ))}
        </div>
        <pre className="terminal__code">
          {displayLines.map((line, i) => (
            <div key={i} className="terminal__line">
              <span style={{ color: line.color || "transparent" }}>
                {line.text || "\u00A0"}
              </span>
              {i === lineIdx && (
                <span
                  className={`terminal__cursor${showCursor ? "" : " terminal__cursor--hidden"}`}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero__rule" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__left">
          <div className="hero__tag">
            <span className="hero__tag-dot" aria-hidden="true" />
            Available for work
          </div>

          <h1 className="hero__name">
            Winfred
            <br />
            <em>Edube</em>
          </h1>

          <p className="hero__title">
            Full-Stack Developer&nbsp;·&nbsp;React &amp; Ruby on Rails
          </p>

          <p className="hero__value-prop">
            I build web applications that work in the real world — clean
            architecture, reliable data flow, and interfaces people can actually
            use.
          </p>

          <div className="hero__ctas">
            <button
              className="btn btn--primary"
              onClick={() => scrollTo("#projects")}
            >
              View My Work
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="btn btn--outline-light"
              onClick={() => scrollTo("#contact")}
            >
              Get In Touch
            </button>
          </div>

          <div className="hero__social">
            {/* REPLACE: Update href values with your actual GitHub and LinkedIn URLs */}
            <a
              href="https://github.com/GITHUB_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub profile"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <span className="hero__social-divider" aria-hidden="true" />
            <a
              href="https://linkedin.com/in/LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn profile"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Terminal panel */}
        <div className="hero__right" aria-hidden="true">
          <Typewriter />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
