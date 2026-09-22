import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">Digital Health · Analytics · Web</p>
          <h1>Turning Data Into <span>Meaningful Insights.</span></h1>
          <p className="hero-lead">
            Hi, I’m Van Trung Nguyen — a Digital Health Engineering Technology student and aspiring Data Analyst based in Toronto.
          </p>
          <p className="mission">
            I aim to use data, technology, and healthcare knowledge to build practical solutions that improve reporting, decision-making, and user experience.
          </p>
          <div className="button-row">
            <Link className="button primary" to="/projects">View Projects</Link>
            <Link className="button secondary" to="/about">About Me</Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="data-orbit orbit-one"></div>
          <div className="data-orbit orbit-two"></div>
          <div className="hero-card">
            <span className="mini-label">ANALYTICS SNAPSHOT</span>
            <strong>Data → Insight → Action</strong>
            <div className="mini-chart">
              <i style={{ height: '42%' }}></i>
              <i style={{ height: '68%' }}></i>
              <i style={{ height: '56%' }}></i>
              <i style={{ height: '84%' }}></i>
              <i style={{ height: '94%' }}></i>
            </div>
          </div>
        </div>
      </section>

      <section className="section container stats-grid">
        <article className="stat-card"><strong>3</strong><p>Featured projects across analytics, QA, and web development.</p></article>
        <article className="stat-card"><strong>4</strong><p>Core service areas built around practical technical skills.</p></article>
        <article className="stat-card"><strong>50K+</strong><p>Patient records represented in my healthcare analytics project.</p></article>
      </section>

      <section className="section container split-callout">
        <div>
          <p className="eyebrow">What I focus on</p>
          <h2>Clear data, dependable systems, useful digital experiences.</h2>
        </div>
        <p>
          My portfolio brings together data analytics, dashboard development, software testing, and web development — with a growing focus on healthcare technology.
          {' '}<Link className="text-link" to="/services">Explore my services →</Link>
        </p>
      </section>
    </>
  );
}

export default Home;
