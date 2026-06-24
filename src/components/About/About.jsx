import React from "react";
import "./About.css";

const CAPABILITIES = [
  {
    category: "Core Stack",
    items: [
      "React",
      "Ruby on Rails",
      "JavaScript",
      "HTML5",
      "CSS / SCSS",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    category: "Specialisations",
    items: [
      "M-Pesa Integrations",
      "Business Systems",
      "Admin Dashboards",
      "Auth & Authorisation",
    ],
  },
  {
    category: "Workflow",
    items: ["Git", "CI/CD", "Agile", "Pair Programming"],
  },
];

const STATS = [
  { value: "1,300+", label: "Hours pair programming" },
  { value: "3", label: "Production apps shipped" },
  { value: "React", label: "+ Rails specialist" },
  { value: "3 yrs", label: "Remote collaboration" },
];

export default function About() {
  return (
    <section
      id="about"
      className="about section--light"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about__header reveal">
          <span className="section-label">About</span>
          <h2 className="section-title" id="about-title">
            Developer first.
            <br />
            <em>Problem-solver always.</em>
          </h2>
        </div>

        <div className="about__body">
          <div className="about__left reveal">
            <p className="about__bio">
              I'm a full-stack developer based in Nairobi, Kenya with a BSc in
              Business &amp; Information Technology and over 1,300 hours of
              collaborative development through Microverse's remote program.
            </p>
            <p className="about__bio">
              My business background means I approach every project from two
              directions at once: engineering the architecture, and validating
              that it actually solves the problem it's supposed to.
            </p>

            <div className="about__stats">
              {STATS.map((s) => (
                <div key={s.label} className="about__stat">
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <a
              href="https://docs.google.com/document/d/1vpkbxWbYJXyBDoVsfqF5HltCMREwxwOp/edit?usp=sharing&ouid=100653378505688339380&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline about__cv"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download CV
            </a>
          </div>

          <div className="about__right reveal reveal-delay-2">
            {CAPABILITIES.map((group) => (
              <div key={group.category} className="about__cap-group">
                <h3 className="about__cap-heading">{group.category}</h3>
                <div className="about__cap-pills">
                  {group.items.map((item) => (
                    <span key={item} className="about__pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
