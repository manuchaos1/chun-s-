import React from 'react';
import PageIntro from '../components/PageIntro.jsx';

const BASE = import.meta.env.BASE_URL;

const projects = [
  {
    title: 'Healthcare Analytics Dashboard',
    date: 'Sep 2025 — Present',
    stack: 'SQL · Python · Tableau',
    image: `${BASE}assets/healthcare-dashboard-concept.svg`,
    description: 'A healthcare analytics project focused on cleaning and analyzing 50,000+ patient records and presenting operational metrics through KPI dashboards.',
    role: 'Cleaned, transformed, and analyzed patient data with SQL and Python, then designed six Tableau dashboards for department-level visibility.',
    outcome: 'Produced clear views of patient volume, department workload, and reporting metrics to support operational insight.',
    concept: true,
  },
  {
    title: 'Automated QA & Testing Suite',
    date: 'Jun 2025 — Aug 2025',
    stack: 'Selenium · Python · Postman · Jira',
    image: `${BASE}assets/qa-testing-concept.svg`,
    description: 'A structured testing project combining browser automation, API validation, test planning, and defect tracking.',
    role: 'Created test plans, executed Selenium/Python automation, tested REST APIs in Postman, and documented defects in Jira.',
    outcome: 'Built a repeatable QA workflow that demonstrates both automated and manual validation practices.',
    concept: true,
  },
  {
    title: 'Clinic Web Application',
    date: 'May 2025 — Jun 2025',
    stack: 'HTML/CSS · JavaScript',
    image: `${BASE}assets/clinic-project.png`,
    description: 'A responsive clinic website designed around digital healthcare services, appointment access, and patient-facing information.',
    role: 'Designed and developed the responsive interface and interactive JavaScript features for clinic and appointment workflows.',
    outcome: 'Delivered a complete multi-page clinic experience with a clear healthcare-oriented visual identity and responsive navigation.',
    live: 'https://manuchaos1.github.io/Website-clinic/',
    github: 'https://github.com/manuchaos1/Website-clinic',
  },
];

function Projects() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Three projects that show how I work."
        description="A mix of analytics, software quality, and web development projects with clear roles, outcomes, and completion dates."
      />
      <section className="section container project-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className={`project-image ${index % 2 === 1 ? 'order-two' : ''}`}>
              <img src={project.image} alt={`${project.title} project visual`} />
              {project.concept && <span className="concept-label">Concept visual</span>}
            </div>
            <div className="project-copy">
              <div className="project-meta"><span>{project.date}</span><span>{project.stack}</span></div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-detail"><strong>My role</strong><p>{project.role}</p></div>
              <div className="project-detail"><strong>Outcome</strong><p>{project.outcome}</p></div>
              {(project.live || project.github) && (
                <div className="button-row">
                  {project.live && <a className="button primary" href={project.live} target="_blank" rel="noreferrer">Live Demo</a>}
                  {project.github && <a className="button secondary" href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Projects;
