import React from 'react';
import PageIntro from '../components/PageIntro.jsx';

const skillGroups = [
  ['Data Analytics & BI', ['SQL', 'Python', 'Tableau', 'Excel', 'Data Cleaning', 'KPI Reporting']],
  ['Programming & Web', ['JavaScript', 'HTML/CSS', 'C#', 'Java', 'REST APIs', 'Git']],
  ['Testing & QA', ['Selenium', 'Postman', 'Jira', 'Test Cases', 'Bug Reporting']],
  ['Professional', ['Communication', 'Teamwork', 'Problem Solving', 'Confidentiality', 'Attention to Detail']],
];

function About() {
  return (
    <>
      <PageIntro
        eyebrow="About Me"
        title="I connect data, technology, and practical problem-solving."
        description="A concise introduction to my background, education, and technical strengths."
      />

      <section className="section container about-grid">
        <div className="portrait-frame">
          <img src="/assets/van-trung-headshot.jpg" alt="Van Trung Nguyen headshot" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Legal name: Van Trung Nguyen</p>
          <h2>Digital Health Engineering Technology Student | Aspiring Data Analyst</h2>
          <p>
            I am a Digital Health Engineering Technology student at Centennial College with hands-on experience in data analysis, dashboard reporting, software testing, and web development. I enjoy working with SQL, Python, Tableau, Excel, and JavaScript to turn information into clear, useful outputs.
          </p>
          <p>
            My experience includes financial data analytics, software testing, customer-facing work, and academic projects involving healthcare data. I am especially interested in Data Analyst and Healthcare Analytics roles where data quality and clear reporting support better decisions.
          </p>
          <div className="button-row">
            <a className="button primary" href="/Van_Trung_Nguyen_Resume.pdf" target="_blank" rel="noreferrer">View Resume PDF</a>
            <a className="button secondary" href="/Van_Trung_Nguyen_Resume.pdf" download>Download Resume</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Where I’m building my foundation.</h2>
        </div>
        <div className="timeline-list">
          <article>
            <span>Sep 2025 — Present · Expected Jun 2028</span>
            <h3>Centennial College</h3>
            <p>Advanced Diploma, Digital Health Engineering Technology · Toronto, ON</p>
          </article>
          <article>
            <span>Sep 2021 — May 2025</span>
            <h3>Hanoi Law University</h3>
            <p>Bachelor of Laws (LL.B.) · Hanoi, Vietnam</p>
          </article>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Tools and strengths I use across projects.</h2>
        </div>
        <div className="skill-groups">
          {skillGroups.map(([title, skills]) => (
            <article className="skill-card" key={title}>
              <h3>{title}</h3>
              <div className="chip-row">
                {skills.map((skill) => <span className="chip" key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
