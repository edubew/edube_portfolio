import React from "react";
import "./Projects.css";

/* ── Browser frame wrapper ── */
function Browser({ url, children }) {
  return (
    <div className="browser">
      <div className="browser__chrome">
        <div className="browser__dots">
          <span style={{ background: "#FF5F56" }} />
          <span style={{ background: "#FFBD2E" }} />
          <span style={{ background: "#27C93F" }} />
        </div>
        <div className="browser__url">{url}</div>
      </div>
      <div className="browser__screen">{children}</div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="mock mock--ecom">
      <div className="mock-nav">
        <span className="mock-logo">MiniPulse</span>
        <div className="mock-nav-r">
          <span className="mock-navlink">Products</span>
          <span className="mock-cart">Cart (2)</span>
        </div>
      </div>
      <div className="mock-body">
        <div className="mock-product">
          <div className="mock-product-img">
            <div className="mock-product-img-inner" />
            <span className="mock-badge">New</span>
          </div>
          <div className="mock-product-info">
            <div className="mock-product-cat">Portable Blenders</div>
            <div className="mock-product-name">MiniPulse Pro X1</div>
            <div className="mock-product-price">KSh 2,500</div>
            <div className="mock-product-desc">
              USB-C rechargeable · 6-blade motor · 500ml
            </div>
            <div className="mock-product-btn">Add to Cart</div>
          </div>
        </div>
        <div className="mock-mpesa">
          <div className="mock-mpesa-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="#7A8F7B"
                strokeWidth="1.5"
              />
              <path
                d="M8 12l3 3 5-5"
                stroke="#7A8F7B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Secure M-Pesa Checkout
          </div>
          <div className="mock-mpesa-row">
            <div className="mock-mpesa-input">+254 7XX XXX XXX</div>
            <div className="mock-mpesa-btn">Pay KSh 2,500</div>
          </div>
          <div className="mock-mpesa-note">
            You'll receive an STK push on your phone
          </div>
        </div>
      </div>
    </div>
  );
}

function OpsMockup() {
  return (
    <div className="mock mock--ops">
      <div className="mock-sidebar">
        <div className="mock-sidebar-logo">OPS</div>
        <div className="mock-sidebar-nav">
          <div className="mock-sidebar-item mock-sidebar-item--active">
            Dashboard
          </div>
          <div className="mock-sidebar-item">Tasks</div>
          <div className="mock-sidebar-item">Sales</div>
          <div className="mock-sidebar-item">Team</div>
          <div className="mock-sidebar-item">Reports</div>
        </div>
      </div>
      <div className="mock-main">
        <div className="mock-topbar">
          <span className="mock-topbar-title">Dashboard</span>
          <div className="mock-topbar-user">WE</div>
        </div>
        <div className="mock-stats-row">
          <div className="mock-stat-card">
            <div className="mock-stat-n">24</div>
            <div className="mock-stat-l">Active Tasks</div>
          </div>
          <div className="mock-stat-card">
            <div className="mock-stat-n">KSh 340k</div>
            <div className="mock-stat-l">Monthly Sales</div>
          </div>
          <div className="mock-stat-card">
            <div className="mock-stat-n">8</div>
            <div className="mock-stat-l">Team Members</div>
          </div>
        </div>
        <div className="mock-table-label">Recent Tasks</div>
        <div className="mock-table">
          <div className="mock-row mock-row--header">
            <span>Task</span>
            <span>Assigned</span>
            <span>Status</span>
          </div>
          {[
            { t: "Client proposal draft", a: "WE", s: "Done", c: "#7A8F7B" },
            {
              t: "Q4 inventory review",
              a: "AM",
              s: "In Progress",
              c: "#C9A84C",
            },
            { t: "Invoice #1042", a: "JK", s: "Pending", c: "#8C8480" },
          ].map((r, i) => (
            <div key={i} className="mock-row">
              <span>{r.t}</span>
              <span className="mock-avatar">{r.a}</span>
              <span className="mock-status" style={{ color: r.c }}>
                {r.s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DecorMockup() {
  return (
    <div className="mock mock--decor">
      <div className="mock-decor-header">
        <div className="mock-decor-logo">
          Dawenee <span>Decor &amp; Events</span>
        </div>
      </div>
      <div className="mock-decor-body">
        <div className="mock-decor-form">
          <div className="mock-decor-heading">Build your quote</div>
          {[
            {
              label: "Floral Arrangements",
              price: "KSh 15,000",
              checked: true,
            },
            { label: "Chair Covers × 50", price: "KSh 8,500", checked: true },
            {
              label: "Table Centrepieces × 10",
              price: "KSh 12,000",
              checked: false,
            },
            { label: "Backdrop & Draping", price: "KSh 22,000", checked: true },
          ].map((item) => (
            <div
              key={item.label}
              className={`mock-decor-item${item.checked ? " mock-decor-item--checked" : ""}`}
            >
              <div
                className={`mock-decor-check${item.checked ? " mock-decor-check--on" : ""}`}
              >
                {item.checked && (
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5l2.5 2.5L8 3"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>
              <span className="mock-decor-label">{item.label}</span>
              <span className="mock-decor-price">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mock-decor-summary">
          <div className="mock-decor-summary-title">Live Quote</div>
          <div className="mock-decor-line">
            <span>Floral Arrangements</span>
            <span>15,000</span>
          </div>
          <div className="mock-decor-line">
            <span>Chair Covers</span>
            <span>8,500</span>
          </div>
          <div className="mock-decor-line">
            <span>Backdrop</span>
            <span>22,000</span>
          </div>
          <div className="mock-decor-total">
            <span>Total</span>
            <span>KSh 45,500</span>
          </div>
          <div className="mock-decor-cta">Request This Quote</div>
        </div>
      </div>
    </div>
  );
}

/* ── Project data ── */
const FEATURED = {
  label: "Featured Project",
  title: "E-Commerce Platform with M-Pesa Integration",
  problem:
    "A Nairobi-based product business needed a complete online sales channel with a payment method Kenyan customers actually use.",
  solution:
    "Built a full e-commerce platform with product catalogue, cart system, and admin dashboard. Integrated M-Pesa STK Push via the Safaricom Daraja API; customers pay directly from their phone without leaving the site. Callbacks update order status automatically.",
  outcomes: [
    "End-to-end checkout in under 60 seconds via M-Pesa",
    "Admin dashboard with real-time order management",
    "Zero payment failures from callback handling edge cases",
  ],
  stack: [
    "React",
    "Ruby on Rails",
    "PostgreSQL",
    "Daraja API",
    "SCSS",
    "Sidekiq",
  ],
  live: "ECOMMERCE_LIVE_URL",
  github: "ECOMMERCE_GITHUB_URL",
  mockup: <EcommerceMockup />,
  url: "app.minipulse.co.ke",
};

const PROJECTS = [
  {
    label: "Internal Tool",
    title: "Startup Operations Platform",
    problem:
      "Fragmented tools across spreadsheets, WhatsApp, and email were creating bottlenecks and losing task history.",
    solution:
      "Centralized platform consolidating task management, sales tracking, and team coordination. Refactored from a single-user model to a multi-user system with role-based access control.",
    outcomes: [
      "Replaced 4 separate tools with one system",
      "Role-based access across 3 permission levels",
      "Shared task and sales visibility across the team",
    ],
    stack: ["React", "Ruby on Rails", "PostgreSQL", "REST API", "SCSS"],
    live: "OPS_PLATFORM_LIVE_URL",
    github: "OPS_PLATFORM_GITHUB_URL",
    mockup: <OpsMockup />,
    url: "app.myriad evo-internal.co.ke",
  },
  {
    label: "Client Tool",
    title: "Decor Brand Quotation System",
    problem:
      "Sales team spending hours on manual quotes. Low-intent leads were consuming the same time as serious ones.",
    solution:
      "Web-based quotation tool where clients self-select services and see live pricing updates. Submissions arrive pre-qualified with full service breakdown.",
    outcomes: [
      "Eliminated manual quote generation entirely",
      "Real-time pricing calculator with itemised summary",
      "Clients qualify themselves before reaching the team",
    ],
    stack: ["React", "SCSS"],
    live: "DECOR_LIVE_URL",
    github: "DECOR_GITHUB_URL",
    mockup: <DecorMockup />,
    url: "quote.daweneedecor.co.ke",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects section--white"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="projects__header reveal">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title" id="projects-title">
            Projects built to ship
          </h2>
          <p className="section-subtitle">
            Production applications — designed around business outcomes, not
            just technology choices.
          </p>
        </div>

        {/* Featured project */}
        <div className="feat reveal">
          <div className="feat__meta">
            <span className="feat__label">{FEATURED.label}</span>
          </div>
          <div className="feat__grid">
            <div className="feat__info">
              <h3 className="feat__title">{FEATURED.title}</h3>
              <div className="feat__section">
                <span className="feat__section-label">The problem</span>
                <p className="feat__text">{FEATURED.problem}</p>
              </div>
              <div className="feat__section">
                <span className="feat__section-label">The solution</span>
                <p className="feat__text">{FEATURED.solution}</p>
              </div>
              <div className="feat__section">
                <span className="feat__section-label">Outcomes</span>
                <ul className="feat__outcomes">
                  {FEATURED.outcomes.map((o) => (
                    <li key={o}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8l3.5 3.5L13 4"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feat__stack">
                {FEATURED.stack.map((t) => (
                  <span key={t} className="feat__tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="feat__links">
                <a
                  href={FEATURED.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--sm"
                >
                  Live Demo
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href={FEATURED.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline btn--sm"
                >
                  View Code
                </a>
              </div>
            </div>
            <div className="feat__preview">
              <Browser url={FEATURED.url}>{FEATURED.mockup}</Browser>
            </div>
          </div>
        </div>

        {/* Smaller projects */}
        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={`proj reveal reveal-delay-${i + 1}`}
            >
              <div className="proj__preview">
                <Browser url={p.url}>{p.mockup}</Browser>
              </div>
              <div className="proj__info">
                <span className="proj__label">{p.label}</span>
                <h3 className="proj__title">{p.title}</h3>
                <div className="proj__section">
                  <span className="proj__section-label">Problem</span>
                  <p className="proj__text">{p.problem}</p>
                </div>
                <ul className="proj__outcomes">
                  {p.outcomes.map((o) => (
                    <li key={o}>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8l3.5 3.5L13 4"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="proj__stack">
                  {p.stack.map((t) => (
                    <span key={t} className="proj__tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="proj__links">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary btn--sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline btn--sm"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
