import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="section container not-found">
      <p className="eyebrow">404</p>
      <h1>That page is not here.</h1>
      <p>Use the navigation above or return to the portfolio home page.</p>
      <Link className="button primary" to="/">Go Home</Link>
    </section>
  );
}

export default NotFound;
