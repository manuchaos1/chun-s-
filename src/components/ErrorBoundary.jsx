import React from 'react';

// Keeps the portfolio usable if a page throws an unexpected rendering error.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio rendering error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-screen">
          <p className="eyebrow">Something went wrong</p>
          <h1>The portfolio could not render this page.</h1>
          <p>Please refresh the page or return to the home page.</p>
          <a className="button primary" href="/">Return Home</a>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
