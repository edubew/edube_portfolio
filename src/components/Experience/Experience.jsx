import React from "react";
import "./Experience.css";

const EXPERIENCE = [
  {
    id: 1,
    role: "Freelance Full-Stack Developer",
    org: "Independent",
    period: "START_DATE – Present",
    // REPLACE: Update START_DATE with the actual start date, e.g. "Jan 2024 – Present"
    description:
      "Built and shipped multiple production React/Rails applications independently — architecture, development, deployment, and post-launch support.",
    type: "current",
  },
  {
    id: 2,
    role: "Customer Care & Operations Officer",
    org: "Glam Decor",
    period: "Mar 2025 – Sep 2025",
    description:
      "Worked directly with non-technical clients, translating needs into clear requirements — a skill directly applied to client-facing development work.",
    type: "work",
  },
  {
    id: 3,
    role: "Volunteer Mentor",
    org: "Microverse Inc.",
    period: "Dec 2022 – Sep 2023",
    description:
      "Reviewed peer code and provided structured feedback on architecture and best practices as part of Microverse's peer-mentorship program.",
    type: "volunteer",
  },
];

const TYPE_ICONS = {
  current: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  work: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="7"
        width="20"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  volunteer: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="experience__header">
          <p className="section-label reveal">Experience</p>
          <h2 className="section-title reveal reveal-delay-1">
            Where I've worked
          </h2>
        </div>

        <div className="timeline" role="list">
          {EXPERIENCE.map((entry, i) => (
            <div
              key={entry.id}
              className={`timeline__entry timeline__entry--${i % 2 === 0 ? "left" : "right"} reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}
              role="listitem"
            >
              <div className="timeline__node" aria-hidden="true">
                {TYPE_ICONS[entry.type]}
              </div>

              <div className="timeline__card">
                <div className="timeline__meta">
                  <span className="timeline__period">{entry.period}</span>
                  {entry.type === "current" && (
                    <span className="timeline__badge">Current</span>
                  )}
                </div>
                <h3 className="timeline__role">{entry.role}</h3>
                <p className="timeline__org">{entry.org}</p>
                <p className="timeline__desc">{entry.description}</p>
              </div>
            </div>
          ))}

          <div className="timeline__line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
