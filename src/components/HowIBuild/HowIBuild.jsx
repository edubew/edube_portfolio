import React from "react";
import "./HowIBuild.css";

const STEPS = [
  {
    num: "01",
    title: "Understand the business problem",
    desc: "Before writing a line of code, I map out what the system needs to solve (the underlying workflow that needs to change).",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M21 21l-4.35-4.35M11 8v3l2 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Design scalable architecture",
    desc: "Data models, API contracts, and component boundaries defined upfront. The goal is a system that handles growth without requiring a rewrite six months later.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M17.5 14v7M14 17.5h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Build reliable systems",
    desc: "Clean, tested code with proper error handling, secure authentication, and performance considerations built in.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Ship and iterate",
    desc: "Deployed to production, monitored, and refined. I stay involved after launch; fixing edge cases, responding to real user behaviour, and improving over time.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HowIBuild() {
  return (
    <section
      id="how-i-build"
      className="how section--dark"
      aria-labelledby="how-title"
    >
      <div className="container">
        <div className="how__header reveal">
          <span className="section-label section-label--light">Process</span>
          <h2 className="section-title section-title--light" id="how-title">
            How I Build
          </h2>
        </div>

        <div className="how__grid">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`how__card reveal reveal-delay-${i + 1}`}
            >
              <div className="how__card-top">
                <span className="how__num" aria-hidden="true">
                  {step.num}
                </span>
                <span className="how__icon">{step.icon}</span>
              </div>
              <h3 className="how__title">{step.title}</h3>
              <p className="how__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
