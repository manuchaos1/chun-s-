import React from 'react';
import PageIntro from '../components/PageIntro.jsx';

const BASE = import.meta.env.BASE_URL;

const skillGroups = [
  ['Data Analytics & BI', ['SQL', 'Python', 'Tableau', 'Excel', 'Data Cleaning', 'KPI Reporting']],
  ['Programming & Web', ['JavaScript', 'HTML/CSS', 'C#', 'Java', 'REST APIs', 'Git']],
  ['Testing & QA', ['Selenium', 'Postman', 'Jira', 'Test Cases', 'Bug Reporting']],
  ['Professional', ['Communication', 'Teamwork', 'Customer Service', 'Problem Solving', 'Confidentiality', 'Attention to Detail']],
];

const experience = [
  {
    date: 'Apr 2025 — Aug 2025',
    role: 'Data Analyst Intern',
    company: 'Techcombank',
    location: 'Hanoi, Vietnam',
    bullets: [
      'Cleaned, transformed, and validated financial datasets using SQL and Python to improve reporting accuracy and data integrity.',
      'Built Tableau dashboards to track transaction trends, customer metrics, and business performance indicators.',
      'Reviewed data outputs, investigated inconsistencies, and documented repeatable reporting steps for business users.',
    ],
  },
  {
    date: 'Nov 2023 — Mar 2024',
    role: 'Software Testing Volunteer',
    company: 'Agribank',
    location: 'Hanoi, Vietnam',
    bullets: [
      'Tested mobile banking app modules, identified UI/UX issues, documented defects, and shared findings with the IT team.',
    ],
  },
  {
    date: 'Jul 2025 — Present',
    role: 'Chef & Server',
    company: 'Vietgarden',
    location: 'Toronto, ON',
    bullets: [
      'Manage front-of-house service and back-of-house food preparation in a high-volume restaurant environment.',
      'Take orders, provide menu recommendations, resolve guest inquiries, and maintain food safety and presentation standards.',
      'Use customer service, teamwork, and time management skills during busy shifts.',
    ],
  },
  {
    date: 'Jan 2024 — Dec 2024',
    role: 'Retail Sales Associate',
    company: 'Uniqlo',
    location: 'Hanoi, Vietnam',
    bullets: [
      'Assisted 100+ daily customers with styling choices, fitting rooms, product recommendations, floor replenishment, and register operations.',
      'Built strong customer-service experience through fast-paced, face-to-face retail support.',
    ],
  },
  {
    date: 'Jun 2024 — May 2025',
    role: 'Law Clerk',
    company: 'Indochine Counsel',
    location: 'Hanoi, Vietnam',
    bullets: [
      'Supported case management, legal document preparation, research, and confidential record administration.',
    ],
  },
  {
    date: 'Jan 2023 — Mar 2024',
    role: 'German A1 Tutor',
    company: 'Freelance',
    location: 'Hanoi, Vietnam',
    bullets: [
      'Tutored beginner German students through tailored lesson plans and progress-focused practice.',
    ],
  },
];

function About() {
  return (
    <>
      <PageIntro
        eyebrow="About Me"
        title="I connect data, technology, and practical problem-solving."
        description="A concise introduction to my background, education, experience, and technical strengths."
      />

      <section className="section container about-grid">
        <div className="portrait-frame">
          <img src={`${BASE}assets/van-trung-headshot.jpg`} alt="Van Trung Nguyen headshot" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Legal name: Van Trung Nguyen</p>
          <h2>Digital Health Engineering Technology Student | Aspiring Data Analyst</h2>
          <p>
            I am a Digital Health Engineering Technology student at Centennial College with hands-on experience in data analysis, dashboard reporting, software testing, web development, and customer-facing work.
          </p>
          <p>
            I enjoy working with SQL, Python, Tableau, Excel, and JavaScript to turn information into clear, useful outputs. My background also includes customer service in restaurant and retail settings, which strengthened my communication, teamwork, adaptability, and problem-solving skills.
          </p>
          <div className="button-row">
            <a className="button primary" href={`${BASE}Van_Trung_Nguyen_Resume.pdf`} target="_blank" rel="noreferrer">View Resume PDF</a>
            <a className="button secondary" href={`${BASE}Van_Trung_Nguyen_Resume.pdf`} download>Download Resume</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Technical, customer service, and professional experience.</h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.role}`}>
              <div className="experience-top">
                <div>
                  <span className="experience-date">{item.date}</span>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company} · {item.location}</p>
                </div>
              </div>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
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
