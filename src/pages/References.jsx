import React from 'react';
import PageIntro from '../components/PageIntro.jsx';

function References() {
  return (
    <>
      <PageIntro
        eyebrow="References"
        title="Professional feedback on how I work."
        description="A testimonial reflecting my reliability, learning speed, and approach to responsibility."
      />
      <section className="section container reference-wrap">
        <article className="reference-card">
          <div className="quote-mark">“</div>
          <blockquote>
            Van Trung is punctual, responsible, proactive in his work, and a quick learner. He adapts quickly to new tasks and demonstrates a strong willingness to improve. I would be very willing to work with him again in the future.
          </blockquote>
          <div className="reference-person">
            <div className="reference-avatar">KT</div>
            <div>
              <strong>Kien Tran</strong>
              <span>Techcombank · Office Manager</span>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default References;
