import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';

const initialForm = { firstName: '', lastName: '', phone: '', email: '', message: '' };

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  // Assignment requirement: capture form input, then redirect back to Home.
  const submitForm = (event) => {
    event.preventDefault();
    setFormError('');

    try {
      const savedMessages = JSON.parse(localStorage.getItem('portfolioContactMessages') || '[]');
      localStorage.setItem(
        'portfolioContactMessages',
        JSON.stringify([...savedMessages, { ...formData, submittedAt: new Date().toISOString() }])
      );
      navigate('/', { state: { messageSent: true }, replace: true });
    } catch (error) {
      console.error('Unable to save contact form:', error);
      setFormError('The form could not save your message in this browser. Please use the email link instead.');
    }
  };

  return (
    <>
      <PageIntro
        eyebrow="Contact Me"
        title="Let’s connect."
        description="For internships, analytics opportunities, project collaboration, or professional networking, feel free to reach out."
      />
      <section className="section container contact-grid">
        <aside className="contact-panel">
          <p className="eyebrow">Contact information</p>
          <h2>Open to meaningful opportunities.</h2>
          <div className="contact-list">
            <a href="mailto:nguyenvantrung24082005@gmail.com"><span>Email</span>nguyenvantrung24082005@gmail.com</a>
            <a href="tel:+16479160324"><span>Phone</span>647-916-0324</a>
            <div><span>Location</span>Toronto, ON</div>
            <a href="https://linkedin.com/in/chun-nguyen-44583039a" target="_blank" rel="noreferrer"><span>LinkedIn</span>chun-nguyen-44583039a</a>
            <a href="https://github.com/manuchaos1" target="_blank" rel="noreferrer"><span>GitHub</span>manuchaos1</a>
          </div>
        </aside>

        <form className="contact-form" onSubmit={submitForm}>
          <div className="form-row">
            <label>First Name<input required name="firstName" value={formData.firstName} onChange={updateField} /></label>
            <label>Last Name<input required name="lastName" value={formData.lastName} onChange={updateField} /></label>
          </div>
          <div className="form-row">
            <label>Contact Number<input required name="phone" type="tel" value={formData.phone} onChange={updateField} /></label>
            <label>Email Address<input required name="email" type="email" value={formData.email} onChange={updateField} /></label>
          </div>
          <label>Message<textarea required name="message" rows="7" value={formData.message} onChange={updateField}></textarea></label>
          {formError && <p className="form-error" role="alert">{formError}</p>}
          <button className="button primary" type="submit">Send Message</button>
          <p className="form-note">This portfolio captures the form information locally, then redirects to Home as required by the assignment.</p>
        </form>
      </section>
    </>
  );
}

export default Contact;
