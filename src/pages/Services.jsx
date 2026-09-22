import React from 'react';
import PageIntro from '../components/PageIntro.jsx';

const services = [
  ['01', 'Data Analysis & Visualization', 'Clean, validate, analyze, and communicate data using SQL, Python, Excel, and visual reporting techniques.'],
  ['02', 'Dashboard Development', 'Build KPI-focused Tableau dashboards that turn business or healthcare metrics into clear, decision-ready views.'],
  ['03', 'Web Development', 'Create responsive, accessible front-end experiences with JavaScript, HTML/CSS, and component-based web development.'],
  ['04', 'Software Testing & QA', 'Support software quality with test planning, Selenium automation, Postman API checks, Jira defect reporting, and documentation.'],
];

function Services() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Technical support from raw data to polished digital experiences."
        description="The areas where my current skills are strongest and where I can contribute to team projects."
      />
      <section className="section container service-grid">
        {services.map(([number, title, description]) => (
          <article className="service-card" key={title}>
            <span className="service-number">{number}</span>
            <div className="service-icon" aria-hidden="true"></div>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default Services;
