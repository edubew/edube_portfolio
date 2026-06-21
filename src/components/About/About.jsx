import React from 'react';
import './About.css';

const SKILLS = {
  Frontend: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3/SCSS'],
  Backend: ['Ruby on Rails', 'REST APIs', 'M-Pesa Daraja API'],
  Database: ['PostgreSQL', 'SQL'],
  Tools: ['Git / GitHub', 'GitHub Actions (CI/CD)', 'Netlify'],
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">

        <div className="about__text reveal">
          <p className="section-label">About</p>
          <h2 className="section-title">The builder behind the work</h2>

          <div className="about__bio">
            <p>
              I'm a full-stack developer based in Nairobi, Kenya, building production web
              applications with React and Ruby on Rails. I hold a BSc in Business &amp;
              Information Technology and trained through Microverse's intensive remote
              program — over 1,300 hours of pair programming and collaborative builds.
            </p>
            <p>
              My business background means I think about systems from both sides: how
              they're built, and whether they actually solve the problem they're supposed to.
            </p>
          </div>

          {/* REPLACE: Update href to your actual CV/resume PDF link */}
          <a
            href="CV_PDF_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline about__cv-btn"
            aria-label="Download Winfred Edube's CV (PDF)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download CV
          </a>
        </div>

        <div className="about__skills reveal reveal-delay-2">
          <h3 className="about__skills-heading">Technical Skills</h3>
          {Object.entries(SKILLS).map(([category, items]) => (
            <div className="about__skill-group" key={category}>
              <span className="about__skill-category">{category}</span>
              <div className="about__tags">
                {items.map((skill) => (
                  <span key={skill} className="about__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
