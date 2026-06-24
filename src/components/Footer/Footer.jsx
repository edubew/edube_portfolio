import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__name">Winfred Edube</span>
          <span className="footer__copy">
            © {year} · All rights reserved · Built with React
          </span>
        </div>

        <div className="footer__links">
          <a
            href="https://github.com/edubew"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/winfred-edube/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:edubewinfred@gmail.com"
            className="footer__link"
            aria-label="Email"
          >
            Email
          </a>
        </div>

        <button
          className="footer__top"
          onClick={scrollTop}
          aria-label="Back to top"
        >
          Back to top
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 19V5M5 12l7-7 7 7"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
