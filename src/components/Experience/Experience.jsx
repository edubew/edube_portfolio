import React from "react";
import "./Experience.css";

const ENTRIES = [
  {
    period: "2023 – Present",
    role: "Freelance Full-Stack Developer",
    org: "Independent",
    current: true,
    desc: "Built and shipped multiple production React/Rails applications independently — owning architecture, development, deployment, and post-launch support across every project.",
    tags: ["React", "Ruby on Rails", "PostgreSQL", "M-Pesa"],
  },
  {
    period: "Mar 2025 – Sep 2025",
    role: "Customer Care & Operations Officer",
    org: "Glam Decor",
    current: false,
    desc: "Worked directly with non-technical clients, translating business needs into clear system requirements — a skill that directly informs client-facing development work.",
    tags: ["Client Communication", "Requirements Analysis", "Operations"],
  },
  {
    period: "Dec 2022 – Sep 2023",
    role: "Volunteer Mentor",
    org: "Microverse Inc.",
    current: false,
    desc: "Reviewed peer code and delivered structured feedback on architecture, patterns, and best practices as part of Microverse's peer-mentorship program.",
    tags: ["Code Review", "Mentorship", "Pair Programming"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience section--light"
      aria-labelledby="exp-title"
    >
      <div className="container">
        <div className="experience__header reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title" id="exp-title">
            Where I've worked
          </h2>
        </div>

        <div className="exp-list">
          {ENTRIES.map((entry, i) => (
            <div key={i} className={`exp-entry reveal reveal-delay-${i + 1}`}>
              <div className="exp-entry__left">
                <span className="exp-entry__period">{entry.period}</span>
                {entry.current && (
                  <span className="exp-entry__badge">Current</span>
                )}
              </div>

              <div className="exp-entry__line" aria-hidden="true">
                <div className="exp-entry__node" />
              </div>

              <div className="exp-entry__right">
                <h3 className="exp-entry__role">{entry.role}</h3>
                <p className="exp-entry__org">{entry.org}</p>
                <p className="exp-entry__desc">{entry.desc}</p>
                <div className="exp-entry__tags">
                  {entry.tags.map((t) => (
                    <span key={t} className="exp-entry__tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
