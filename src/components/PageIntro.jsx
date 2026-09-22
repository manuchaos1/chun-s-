import React from 'react';

function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro container">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="lead">{description}</p>}
    </section>
  );
}

export default PageIntro;
