import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

const CODE_LINES = [
  { text: "class MpesaPaymentService", color: "#7A8F7B" },
  { text: "  def initialize(order)", color: "#C9D2C4" },
  { text: "    @order = order", color: "#9AAFAA" },
  { text: "  end", color: "#C9D2C4" },
  { text: "", color: "" },
  { text: "  def call", color: "#7A8F7B" },
  { text: "    response = daraja.stk_push(", color: "#C9D2C4" },
  { text: "      phone:  @order.phone,", color: "#9AAFAA" },
  { text: "      amount: @order.total,", color: "#9AAFAA" },
  { text: "      ref:    @order.reference", color: "#9AAFAA" },
  { text: "    )", color: "#C9D2C4" },
  { text: "    track_callback(response)", color: "#7A8F7B" },
  { text: "  end", color: "#C9D2C4" },
  { text: "end", color: "#7A8F7B" },
  { text: "", color: "" },
  { text: "const useInventory = (sku) => {", color: "#7A8F7B" },
  { text: "  const [stock, setStock]", color: "#C9D2C4" },
  { text: "    = useState(null)", color: "#9AAFAA" },
  { text: "  useEffect(() => {", color: "#C9D2C4" },
  { text: "    fetchStock(sku).then(setStock)", color: "#9AAFAA" },
  { text: "  }, [sku])", color: "#C9D2C4" },
  { text: "  return stock", color: "#7A8F7B" },
  { text: "}", color: "#7A8F7B" },
];

function Typewriter() {
  const [lines, setLines] = useState([
    { chars: "", color: CODE_LINES[0].color },
  ]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [cursor, setCursor] = useState(true);
  const [paused, setPaused] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setCursor((v) => !v), 540);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (paused) {
      const id = setTimeout(() => {
        setLines([{ chars: "", color: CODE_LINES[0].color }]);
        setLineIdx(0);
        setCharIdx(0);
        setPaused(false);
      }, 2400);
      return () => clearTimeout(id);
    }
    const current = CODE_LINES[lineIdx];
    if (!current) return;
    if (charIdx < current.text.length) {
      const id = setTimeout(() => setCharIdx((c) => c + 1), 24);
      return () => clearTimeout(id);
    }
    const next = lineIdx + 1;
    if (next >= CODE_LINES.length) {
      const id = setTimeout(() => setPaused(true), 1200);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setLines((prev) => {
        const upd = [...prev];
        upd[lineIdx] = { chars: current.text, color: current.color };
        return [...upd, { chars: "", color: CODE_LINES[next].color }];
      });
      setLineIdx(next);
      setCharIdx(0);
    }, 50);
    return () => clearTimeout(id);
  }, [lineIdx, charIdx, paused]);

  useEffect(() => {
    if (bodyRef.current)
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const display = lines.map((l, i) => ({
    ...l,
    chars:
      i === lineIdx
        ? (CODE_LINES[lineIdx]?.text.slice(0, charIdx) ?? "")
        : l.chars,
  }));

  return (
    <div
      className="terminal"
      role="img"
      aria-label="Code sample from Winfred's projects"
    >
      <div className="terminal__bar">
        <span className="terminal__dot" style={{ background: "#FF5F56" }} />
        <span className="terminal__dot" style={{ background: "#FFBD2E" }} />
        <span className="terminal__dot" style={{ background: "#27C93F" }} />
        <span className="terminal__file">services/mpesa_payment.rb</span>
      </div>
      <div className="terminal__body" ref={bodyRef}>
        <div className="terminal__gutter" aria-hidden="true">
          {display.map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <pre className="terminal__code">
          {display.map((line, i) => (
            <div key={i} className="terminal__line">
              <span style={{ color: line.color || "transparent" }}>
                {line.chars || "\u00A0"}
              </span>
              {i === lineIdx && (
                <span
                  className={`terminal__cursor${cursor ? "" : " terminal__cursor--off"}`}
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
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="container hero__grid">
        {/* Left */}
        <div className="hero__left">
          <div className="hero__tag">
            <span className="hero__tag-dot" aria-hidden="true" />
            Available &nbsp;·&nbsp; Nairobi, Kenya
          </div>

          <h1 className="hero__name">
            Winfred
            <br />
            <em>Edube</em>
          </h1>

          <p className="hero__statement">
            Building production web applications
            <br />
            with React and Ruby on Rails.
          </p>

          <p className="hero__sub">
            Full-stack engineer focused on clean architecture, reliable data
            flow, and software that solves real business problems.
          </p>

          <div className="hero__ctas">
            <button
              className="btn btn--primary btn--lg"
              onClick={() => scrollTo("#projects")}
            >
              View My Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="btn btn--ghost btn--lg"
              onClick={() => scrollTo("#contact")}
            >
              Get In Touch
            </button>
          </div>

          <div className="hero__social">
            <a
              href="https://github.com/edubew"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
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
            <span className="hero__divider" aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/winfred-edube/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
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

        <div className="hero__right" aria-hidden="true">
          <Typewriter />
        </div>
      </div>

      <button
        className="hero__scroll-cta"
        onClick={() => scrollTo("#projects")}
        aria-label="Jump to selected work"
      >
        Selected Work
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
