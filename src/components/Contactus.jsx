import React, { useState } from 'react';
import "./Contactus.css"; // Import CSS file for styling

function ContactUs() {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!message.trim()) {
      errors.message = 'Message is required';
    }
    setErrors(errors);

    // If no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Here you can submit the form data, e.g., send it to a backend server
      console.log('Form submitted:', { name, email, message });
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        {/* Replace the content here with the contact form */}
        <div className="form-card">
          <div className="fs-1 text-center fw-2">Get in touch</div>
          <form className="form" onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor="name" className="label">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className='form-group'>
              <label htmlFor="email" className="label">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className='form-group'>
              <label htmlFor="message" className="label">Message</label>
              <textarea
                id="message"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea"
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit" className="btn1">Submit</button>
          </form>
        </div>
      </div>
      <div className="right-section">
        {/* Replace the content here with a suitable picture for the contact us page */}
        <img src="contact_us_image.jpg" alt="Contact Us" className="contact-image" />
      </div>
    </div>
  );
}

export default ContactUs;
