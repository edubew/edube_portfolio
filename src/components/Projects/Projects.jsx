import React from "react";
import "./Projects.css";

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform with M-Pesa Integration",
    description:
      "A full e-commerce web application with a client-facing storefront and admin dashboard. Integrated M-Pesa payments via the Safaricom Daraja API — customers complete purchases through STK Push at checkout, with order status updated automatically from M-Pesa callback responses.",
    stack: ["React", "Ruby on Rails", "PostgreSQL", "Daraja API", "SCSS"],
    live: "ECOMMERCE_LIVE_URL", // REPLACE
    github: "ECOMMERCE_GITHUB_URL", // REPLACE
    accent: "#96584E",
  },
  {
    id: 2,
    title: "Startup Internal Operations Platform",
    description:
      "A centralized operations platform replacing fragmented tools — consolidating task management, sales tracking, and team coordination. Refactored from a single-user model into a shared system with role-based access control across multiple permission levels.",
    stack: ["React", "Ruby on Rails", "PostgreSQL", "REST API", "SCSS"],
    live: "OPS_PLATFORM_LIVE_URL", // REPLACE
    github: "OPS_PLATFORM_GITHUB_URL", // REPLACE
    accent: "#8C7048",
  },
  {
    id: 3,
    title: "Decor Brand Quotation System",
    description:
      "A web-based quotation tool for a decor business — clients select services and see real-time pricing updates, removing manual back-and-forth on quotes and filtering low-intent inquiries before they reach the sales team.",
    stack: ["React", "SCSS"],
    live: "DECOR_LIVE_URL", // REPLACE
    github: "DECOR_GITHUB_URL", // REPLACE
    accent: "#798165",
  },
];

function ProjectCard({ project, index }) {
  return (
    <article
      className={`project-card reveal${index % 2 === 1 ? " reveal-delay-2" : ""}`}
      aria-label={`Project: ${project.title}`}
    >
      <div
        className="project-card__accent"
        style={{ background: project.accent }}
      />
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__stack">
          {project.stack.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-card__actions">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
            aria-label={`Live demo of ${project.title}`}
          >
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
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--sm"
            aria-label={`GitHub repo for ${project.title}`}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section--alt projects">
      <div className="container">
        <div className="projects__header">
          <p className="section-label reveal">Selected Work</p>
          <h2 className="section-title reveal reveal-delay-1">
            Projects built to ship
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Production applications solving real problems — not demos, not
            tutorials.
          </p>
        </div>
        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
